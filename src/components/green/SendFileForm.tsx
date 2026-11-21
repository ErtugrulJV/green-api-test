import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface SendFileFormProps {
	chatId: string
	urlFile: string
	onChatIdChange: (val: string) => void
	onUrlFileChange: (val: string) => void
}

export function SendFileForm({
	chatId,
	urlFile,
	onChatIdChange,
	onUrlFileChange,
}: SendFileFormProps) {
	return (
		<div className='space-y-4'>
			<div className='space-y-2'>
				<Label htmlFor='chatIdFile'>Chat ID (получатель)</Label>
				<Input
					id='chatIdFile'
					value={chatId}
					onChange={e => onChatIdChange(e.target.value)}
					placeholder='79001234567@c.us'
				/>
			</div>
			<div className='space-y-2'>
				<Label htmlFor='fileUrl'>URL файла</Label>
				<Input
					id='fileUrl'
					type='url'
					value={urlFile}
					onChange={e => onUrlFileChange(e.target.value)}
					placeholder='https://example.com/image.png'
				/>
			</div>
		</div>
	)
}
