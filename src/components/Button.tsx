interface Props {
	sym: string
	handleInput: (inputNumber: string) => void
}

export const Button = (props: Props) => {
	let buttonSymbol = props.sym
	if (props.sym === 'Math.sqrt(') buttonSymbol = '√'
	if (props.sym === '/100') buttonSymbol = '%'

	return (
		<>
			<div
				style={{
					backgroundColor: 'gray',
					padding: '3px',
					margin: '3px',
					fontFamily: 'Arial',
					color: 'white',
					width: '2rem',
					height: '2rem',
					alignItems: 'center',
					justifyContent: 'center',
					display: 'flex',
					border: '2px solid black',
					borderRadius: '0.5rem',
					fontSize: '9px'
				}}
				onClick={() => props.handleInput(props.sym)}
			>
				<h2>{buttonSymbol}</h2>
			</div>
		</>
	)
}
