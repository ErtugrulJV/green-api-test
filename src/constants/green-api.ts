export const PROXY_BASE = '/api/green'

export const GREEN_ENDPOINTS = {
	getSettings: (id: string, token: string) =>
		`/waInstance${id}/getSettings/${token}`,

	getStateInstance: (id: string, token: string) =>
		`/waInstance${id}/getStateInstance/${token}`,

	sendMessage: (id: string, token: string) =>
		`/waInstance${id}/sendMessage/${token}`,

	sendFileByUrl: (id: string, token: string) =>
		`/waInstance${id}/sendFileByUrl/${token}`,
} as const
