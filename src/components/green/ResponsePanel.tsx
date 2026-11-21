import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface ResponsePanelProps {
	response: string
}

export function ResponsePanel({ response }: ResponsePanelProps) {
	return (
		<div className='space-y-2'>
			<Label htmlFor='responseField'>Ответ (readonly)</Label>
			<Textarea
				id='responseField'
				value={response}
				readOnly
				className='min-h-75 font-mono text-sm bg-muted/30'
				placeholder='Здесь появится ответ от GREEN-API...'
			/>
		</div>
	)
}
