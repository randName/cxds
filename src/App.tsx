import * as React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const App: React.FC = () => {
	const [count, setCount] = React.useState(0)
	return (
		<div className="flex flex-col gap-2 items-center justify-center min-h-svh">
			<div className="grid gap-2 items-center">
				<Label>Label</Label>
				<div className="flex gap-2">
					<Input />
					<Button onClick={() => setCount(count + 1)}>
						Click me ({count})
					</Button>
				</div>
			</div>
		</div>
	)
}
