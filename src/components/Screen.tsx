interface Props {
	showScreen: string | number
	borderRadiusTopOrBottom: 'top' | 'bottom'
}

export const Screen = (props: Props) => {
	return (
		<>
			<div
				style={
					props.borderRadiusTopOrBottom === 'top'
						? { borderRadius: ' 10px 10px  0 0 ' }
						: { borderRadius: '0 0 10px 10px' }
				}
				className={'screen-default'}
			>
				<h2 style={{ fontFamily: 'League Spartan' }}>{props.showScreen}</h2>
			</div>
		</>
	)
}
