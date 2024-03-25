import { Calculator } from './components/Calculator.tsx'

function App() {
	return (
		<>
			<div
				className={'body'}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100vw',
					height: '100vh'
				}}
			>
				<Calculator />
			</div>
		</>
	)
}

export default App
