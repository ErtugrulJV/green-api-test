'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'

import { ConnectionForm } from '@/components/green/ConnectionForm'
import { ResponsePanel } from '@/components/green/ResponsePanel'
import { SendFileForm } from '@/components/green/SendFileForm'
import { SendMessageForm } from '@/components/green/SendMessageForm'

import { useGreenApi } from '@/hooks/useGreenApi'
import type { IGreenCredentials } from '@/types/green-api.types'

export default function Home() {
	const [creds, setCreds] = useState<IGreenCredentials>({
		idInstance: '',
		apiTokenInstance: '',
	})

	const [msgChatId, setMsgChatId] = useState('')
	const [message, setMessage] = useState('')

	const [fileChatId, setFileChatId] = useState('')
	const [urlFile, setUrlFile] = useState('')
	const [fileName, setFileName] = useState('')
	const [caption, setCaption] = useState('')

	const {
		response,
		loading,
		getSettings,
		getStateInstance,
		sendMessage,
		sendFileByUrl,
	} = useGreenApi()

	const isCredsValid =
		creds.idInstance.trim() !== '' && creds.apiTokenInstance.trim() !== ''

	return (
		<main className='container mx-auto max-w-5xl py-10 space-y-6'>
			<div className='mb-8'>
				<h1 className='text-3xl font-bold tracking-tight'>GREEN-API Методы</h1>
				<p className='text-muted-foreground mt-2'>
					Тестовое задание: вызов методов и просмотр ответов
				</p>
			</div>

			{/* Блок подключения */}
			<Card>
				<CardHeader>
					<CardTitle>Параметры подключения</CardTitle>
				</CardHeader>
				<CardContent>
					<ConnectionForm creds={creds} onChange={setCreds} />
				</CardContent>
			</Card>

			<div className='grid gap-6 md:grid-cols-2'>
				{/* Блок отправки сообщения */}
				<Card>
					<CardHeader>
						<CardTitle>sendMessage</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<SendMessageForm
							chatId={msgChatId}
							message={message}
							onChatIdChange={setMsgChatId}
							onMessageChange={setMessage}
						/>
						<Button
							className='w-full'
							disabled={loading || !isCredsValid || !msgChatId || !message}
							onClick={() => sendMessage(creds, msgChatId, message)}
						>
							Отправить сообщение
						</Button>
					</CardContent>
				</Card>

				{/* Блок отправки файла */}
				<Card>
					<CardHeader>
						<CardTitle>sendFileByUrl</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<SendFileForm
							chatId={fileChatId}
							urlFile={urlFile}
							fileName={fileName}
							caption={caption}
							onChatIdChange={setFileChatId}
							onUrlFileChange={setUrlFile}
							onFileNameChange={setFileName}
							onCaptionChange={setCaption}
						/>
						<Button
							className='w-full'
							disabled={
								loading || !isCredsValid || !fileChatId || !urlFile || !fileName
							}
							onClick={() =>
								sendFileByUrl(creds, fileChatId, urlFile, fileName, caption)
							}
						>
							Отправить файл
						</Button>
					</CardContent>
				</Card>
			</div>

			<Separator />

			{/* Кнопки проверки состояния */}
			<div className='flex flex-wrap gap-4'>
				<Button
					variant='secondary'
					disabled={loading || !isCredsValid}
					onClick={() => getSettings(creds)}
				>
					{loading ? 'Загрузка...' : 'getSettings'}
				</Button>
				<Button
					variant='secondary'
					disabled={loading || !isCredsValid}
					onClick={() => getStateInstance(creds)}
				>
					{loading ? 'Загрузка...' : 'getStateInstance'}
				</Button>
			</div>

			{/* Панель ответа */}
			<Card>
				<CardHeader>
					<CardTitle>Результат</CardTitle>
				</CardHeader>
				<CardContent>
					<ResponsePanel response={response} />
				</CardContent>
			</Card>
		</main>
	)
}
