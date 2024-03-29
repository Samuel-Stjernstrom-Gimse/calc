interface Props {
	showScreen: string | number
	borderRadiusTopOrBottom: 'top' | 'bottom'
	theme: string
}

export const Screen = (props: Props) => {
	const color: string =
		props.theme === '1' ? 'hsl(224, 36%, 15%)' : props.theme === '2' ? 'hsl(0, 0%, 93%)' : 'hsl(268, 71%, 12%)'

	return (
		<>
			<div
				style={
					props.borderRadiusTopOrBottom === 'top'
						? { borderRadius: '10px 10px 0 0', backgroundColor: color }
						: { borderRadius: '0 0 10px 10px', backgroundColor: color }
				}
				className={'screen-default'}
			>
				<h2 style={{ fontFamily: 'League Spartan' }}>{props.showScreen}</h2>
			</div>
		</>
	)
}
