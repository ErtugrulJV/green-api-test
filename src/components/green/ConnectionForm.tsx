import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { IGreenCredentials } from '@/types/green-api.types'

interface ConnectionFormProps {
	creds: IGreenCredentials
	onChange: (creds: IGreenCredentials) => void
}

export function ConnectionForm({ creds, onChange }: ConnectionFormProps) {
	return (
		<div className='grid gap-4 md:grid-cols-2'>
			<div className='space-y-2'>
				<Label htmlFor='idInstance'>idInstance</Label>
				<Input
					id='idInstance'
					value={creds.idInstance}
					onChange={e => onChange({ ...creds, idInstance: e.target.value })}
					placeholder='Например, 1101000001'
				/>
			</div>
			<div className='space-y-2'>
				<Label htmlFor='apiTokenInstance'>ApiTokenInstance</Label>
				<Input
					id='apiTokenInstance'
					type='password' // Скрываем токен звездочками
					value={creds.apiTokenInstance}
					onChange={e =>
						onChange({ ...creds, apiTokenInstance: e.target.value })
					}
					placeholder='Ваш токен'
				/>
			</div>
		</div>
	)
}
