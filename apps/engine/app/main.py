from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, HttpUrl

from app.services.scraper.url_scraper import UrlProcessingError, extract_url

app = FastAPI(title='Kradle Engine', version='0.1.0')


class UrlProcessRequest(BaseModel):
    url: HttpUrl


class UrlProcessResponse(BaseModel):
    title: str
    source_url: str
    content: str


@app.get('/health')
def health_check() -> dict[str, str]:
    return {'status': 'ok'}


@app.get('/')
def root() -> dict[str, str]:
    return {'message': 'Kradle engine is running'}


@app.post('/process/url', response_model=UrlProcessResponse)
async def process_url(payload: UrlProcessRequest) -> UrlProcessResponse:
    try:
        result = await extract_url(str(payload.url))
    except UrlProcessingError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error
    return UrlProcessResponse(**result)
