'use client'

import * as greenApi from '@/services/greenApi.service'
import type { IGreenCredentials } from '@/types/green-api.types'
import { useState } from 'react'

export function useGreenApi() {
	const [response, setResponse] = useState<string>('')
	const [loading, setLoading] = useState(false)

	async function call<T>(fn: () => Promise<T>) {
		setLoading(true)
		setResponse('')
		try {
			const data = await fn()
			setResponse(JSON.stringify(data, null, 2))
		} catch (e) {
			setResponse(`ERROR:\n${e instanceof Error ? e.message : String(e)}`)
		} finally {
			setLoading(false)
		}
	}

	return {
		response,
		loading,
		getSettings: (creds: IGreenCredentials) =>
			call(() => greenApi.getSettings(creds)),
		getStateInstance: (creds: IGreenCredentials) =>
			call(() => greenApi.getStateInstance(creds)),
		sendMessage: (creds: IGreenCredentials, chatId: string, message: string) =>
			call(() => greenApi.sendMessage(creds, { chatId, message })),
		sendFileByUrl: (
			creds: IGreenCredentials,
			chatId: string,
			urlFile: string,
			fileName: string,
			caption: string,
		) =>
			call(() =>
				greenApi.sendFileByUrl(creds, { chatId, urlFile, fileName, caption }),
			),
	}
}
