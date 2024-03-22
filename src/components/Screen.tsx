interface Props {
	showScreen: string | number
}

export const Screen = (props: Props) => {
	return (
		<>
			<div
				style={{
					height: '3rem',
					width: '300px',
					backgroundColor: 'grey',
					color: 'white',
					border: '2px solid black',
					borderRadius: '0.5rem'
				}}
			>
				<h2 style={{ fontFamily: 'Arial' }}>{props.showScreen}</h2>
			</div>
		</>
	)
}
