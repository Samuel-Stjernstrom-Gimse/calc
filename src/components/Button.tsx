interface Props {
	sym: number | string
	handleNumber: (inputNumber: number | string) => void
}

export const Button = (props: Props) => {
	return (
		<>
			<div onClick={() => props.handleNumber(props.sym)}>
				<h2>{props.sym}</h2>
			</div>
		</>
	)
}
