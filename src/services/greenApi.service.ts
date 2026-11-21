import { GREEN_ENDPOINTS, PROXY_BASE } from '@/constants/green-api'
import type {
	IGetSettingsResponse,
	IGetStateInstanceResponse,
	IGreenCredentials,
	ISendFileByUrlPayload,
	ISendFileByUrlResponse,
	ISendMessagePayload,
	ISendMessageResponse,
} from '@/types/green-api.types'

async function request<T>(url: string, options?: RequestInit): Promise<T> {
	const res = await fetch(url, options)
	const text = await res.text()

	let data: unknown
	try {
		data = JSON.parse(text)
	} catch {
		data = text // Если пришёл не JSON, отдаём как есть
	}

	if (!res.ok) {
		throw new Error(
			typeof data === 'string' ? data : JSON.stringify(data, null, 2),
		)
	}

	return data as T
}

export async function getSettings(
	creds: IGreenCredentials,
): Promise<IGetSettingsResponse> {
	return request<IGetSettingsResponse>(
		`${PROXY_BASE}${GREEN_ENDPOINTS.getSettings(creds.idInstance, creds.apiTokenInstance)}`,
	)
}

export async function getStateInstance(
	creds: IGreenCredentials,
): Promise<IGetStateInstanceResponse> {
	return request<IGetStateInstanceResponse>(
		`${PROXY_BASE}${GREEN_ENDPOINTS.getStateInstance(creds.idInstance, creds.apiTokenInstance)}`,
	)
}

export async function sendMessage(
	creds: IGreenCredentials,
	payload: ISendMessagePayload,
): Promise<ISendMessageResponse> {
	return request<ISendMessageResponse>(
		`${PROXY_BASE}${GREEN_ENDPOINTS.sendMessage(creds.idInstance, creds.apiTokenInstance)}`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		},
	)
}

export async function sendFileByUrl(
	creds: IGreenCredentials,
	payload: ISendFileByUrlPayload,
): Promise<ISendFileByUrlResponse> {
	return request<ISendFileByUrlResponse>(
		`${PROXY_BASE}${GREEN_ENDPOINTS.sendFileByUrl(creds.idInstance, creds.apiTokenInstance)}`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		},
	)
}
