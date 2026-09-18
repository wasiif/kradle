import { NextResponse } from 'next/server';

const engineUrl = process.env.ENGINE_URL ?? process.env.NEXT_PUBLIC_ENGINE_URL ?? 'http://localhost:8000';

export async function GET() {
  try {
    const response = await fetch(`${engineUrl.replace(/\/$/, '')}/health`, { cache: 'no-store' });
    if (!response.ok) return NextResponse.json({ status: 'offline' }, { status: 503 });
    return NextResponse.json({ status: 'ok' });
  } catch {
    return NextResponse.json({ status: 'offline' }, { status: 503 });
  }
}