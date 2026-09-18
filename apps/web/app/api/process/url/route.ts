import { NextResponse } from 'next/server';

const engineUrl = process.env.ENGINE_URL ?? process.env.NEXT_PUBLIC_ENGINE_URL ?? 'http://localhost:8000';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.url !== 'string') {
    return NextResponse.json({ detail: 'A URL is required.' }, { status: 400 });
  }

  try {
    const response = await fetch(`${engineUrl.replace(/\/$/, '')}/process/url`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ url: body.url }),
      cache: 'no-store',
    });
    const result = await response.json().catch(() => ({ detail: 'The engine returned an invalid response.' }));
    return NextResponse.json(result, { status: response.status });
  } catch {
    return NextResponse.json({ detail: 'The processing engine is unavailable.' }, { status: 503 });
  }
}