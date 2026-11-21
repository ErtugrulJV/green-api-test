import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface SendMessageFormProps {
	chatId: string
	message: string
	onChatIdChange: (val: string) => void
	onMessageChange: (val: string) => void
}

export function SendMessageForm({
	chatId,
	message,
	onChatIdChange,
	onMessageChange,
}: SendMessageFormProps) {
	return (
		<div className='space-y-4'>
			<div className='space-y-2'>
				<Label htmlFor='chatIdMsg'>Chat ID (получатель)</Label>
				<Input
					id='chatIdMsg'
					value={chatId}
					onChange={e => onChatIdChange(e.target.value)}
					placeholder='79001234567@c.us'
				/>
			</div>
			<div className='space-y-2'>
				<Label htmlFor='messageText'>Сообщение</Label>
				<Textarea
					id='messageText'
					value={message}
					onChange={e => onMessageChange(e.target.value)}
					placeholder='Привет! Это тестовое сообщение.'
					rows={3}
				/>
			</div>
		</div>
	)
}
