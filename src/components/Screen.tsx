interface Props {
	showScreen: string | number
}

export const Screen = (props: Props) => {
	return (
		<>
			<div>
				<h2>{props.showScreen}</h2>
			</div>
		</>
	)
}
