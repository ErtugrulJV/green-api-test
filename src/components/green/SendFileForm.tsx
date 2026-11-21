import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface SendFileFormProps {
	chatId: string
	urlFile: string
	fileName: string
	caption: string
	onChatIdChange: (val: string) => void
	onUrlFileChange: (val: string) => void
	onFileNameChange: (val: string) => void
	onCaptionChange: (val: string) => void
}

export function SendFileForm({
	chatId,
	urlFile,
	fileName,
	caption,
	onFileNameChange,
	onCaptionChange,
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
			<div className='space-y-2'>
				<Label htmlFor='fileName'>Имя файла (с расширением)</Label>
				<Input
					id='fileName'
					value={fileName}
					onChange={e => onFileNameChange(e.target.value)}
					placeholder='image.jpg'
				/>
			</div>
			<div className='space-y-2'>
				<Label htmlFor='caption'>Подпись (необязательно)</Label>
				<Input
					id='caption'
					value={caption}
					onChange={e => onCaptionChange(e.target.value)}
					placeholder='Смотри какой файл!'
				/>
			</div>
		</div>
	)
}
