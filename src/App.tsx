import * as React from 'react'
import { Button } from '@/components/ui/button'

export const App: React.FC = () => {
	const [count, setCount] = React.useState(0)
	return (
		<div className="flex flex-col items-center justify-center min-h-svh">
			<Button onClick={() => setCount(count + 1)}>Click me ({count})</Button>
		</div>
	)
}
