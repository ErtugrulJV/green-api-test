import { NextRequest, NextResponse } from 'next/server'

const GREEN_API_BASE = 'https://api.green-api.com'

export async function GET(
	_req: NextRequest,
	{ params }: { params: Promise<{ path: string[] }> },
) {
	const { path } = await params
	const targetUrl = `${GREEN_API_BASE}/${path.join('/')}`

	const res = await fetch(targetUrl, { cache: 'no-store' })
	const text = await res.text()

	return new NextResponse(text, {
		status: res.status,
		headers: {
			'Content-Type': res.headers.get('Content-Type') ?? 'application/json',
		},
	})
}

export async function POST(
	req: NextRequest,
	{ params }: { params: Promise<{ path: string[] }> },
) {
	const { path } = await params
	const targetUrl = `${GREEN_API_BASE}/${path.join('/')}`

	const body = await req.text()

	const res = await fetch(targetUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body,
		cache: 'no-store',
	})

	const text = await res.text()

	return new NextResponse(text, {
		status: res.status,
		headers: {
			'Content-Type': res.headers.get('Content-Type') ?? 'application/json',
		},
	})
}
