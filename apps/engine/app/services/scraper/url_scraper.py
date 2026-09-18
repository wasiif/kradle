import asyncio
import ipaddress
import socket
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup


MAX_RESPONSE_BYTES = 5 * 1024 * 1024
MAX_CONTENT_CHARACTERS = 200_000
REQUEST_TIMEOUT_SECONDS = 15.0


class UrlProcessingError(ValueError):
    pass


def _validate_url(url: str) -> str:
    parsed = urlparse(url)
    if parsed.scheme not in {'http', 'https'} or not parsed.hostname:
        raise UrlProcessingError('Only complete http or https URLs are supported.')
    if parsed.username or parsed.password:
        raise UrlProcessingError('URLs with embedded credentials are not supported.')
    return parsed.hostname


def _host_is_public(hostname: str) -> bool:
    try:
        addresses = {result[4][0] for result in socket.getaddrinfo(hostname, None)}
    except socket.gaierror as error:
        raise UrlProcessingError('The URL host could not be resolved.') from error

    for address in addresses:
        parsed_address = ipaddress.ip_address(address)
        if not parsed_address.is_global:
            return False
    return True


async def extract_url(url: str) -> dict[str, str]:
    hostname = _validate_url(url)
    is_public = await asyncio.to_thread(_host_is_public, hostname)
    if not is_public:
        raise UrlProcessingError('Private and non-public network destinations are not allowed.')

    headers = {'User-Agent': 'KradleEngine/0.1 (+https://kradle.app)'}
    try:
        async with httpx.AsyncClient(follow_redirects=False, timeout=REQUEST_TIMEOUT_SECONDS, headers=headers) as client:
            async with client.stream('GET', url) as response:
                if response.is_redirect:
                    raise UrlProcessingError('Redirected URLs are not supported.')
                response.raise_for_status()
                content_type = response.headers.get('content-type', '').lower()
                if 'text/html' not in content_type and 'text/plain' not in content_type:
                    raise UrlProcessingError('The URL did not return readable HTML or text.')
                content_length = response.headers.get('content-length')
                if content_length and int(content_length) > MAX_RESPONSE_BYTES:
                    raise UrlProcessingError('The response is larger than the 5 MB limit.')
                content = bytearray()
                async for chunk in response.aiter_bytes():
                    content.extend(chunk)
                    if len(content) > MAX_RESPONSE_BYTES:
                        raise UrlProcessingError('The response is larger than the 5 MB limit.')
    except httpx.HTTPError as error:
        raise UrlProcessingError('The source page could not be fetched.') from error

    soup = BeautifulSoup(bytes(content), 'html.parser')
    for element in soup(['script', 'style', 'noscript', 'svg']):
        element.decompose()
    title = soup.title.get_text(' ', strip=True) if soup.title else hostname
    text = ' '.join(soup.get_text(' ', strip=True).split())
    if not text:
        raise UrlProcessingError('The source page did not contain readable text.')

    return {
        'title': title[:300],
        'source_url': url,
        'content': text[:MAX_CONTENT_CHARACTERS],
    }