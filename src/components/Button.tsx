import { useState } from 'react'
import { themes } from '../helpers/typesAndArrays.ts'

interface Props {
	sym: string
	handleInput: (inputNumber: string) => void
	theme: string
}

export const Button = (props: Props) => {
	let buttonSymbol: string = props.sym
	if (props.sym === 'Math.sqrt(') buttonSymbol = '√'
	if (props.sym === 'Math.cos(') buttonSymbol = 'cos'
	if (props.sym === 'Math.sin(') buttonSymbol = 'sin'
	if (props.sym === 'Math.tan(') buttonSymbol = 'tan'
	if (props.sym === '/100') buttonSymbol = '%'
	if (props.sym === '*') buttonSymbol = 'x'
	if (props.sym === '/') buttonSymbol = '÷'

	const [hover, setHover] = useState(false)
	const [click, setClick] = useState(false)

	const handleHover = () => {
		setHover(true)
	}

	const handleMouseOut = () => {
		setHover(false)
	}

	const handleMouseDown = () => {
		setClick(true)
	}

	const handleMouseUp = () => {
		setClick(false)
	}

	const colorStyle =
		props.theme === '1'
			? themes.theme1.primary
			: props.theme === '2'
				? themes.theme2.primary
				: themes.theme3.primary
	const buttonStyle = click ? colorStyle.active : hover ? colorStyle.hover : colorStyle.still

	return (
		<>
			<div
				style={{
					backgroundColor: buttonStyle.backgroundColor,
					boxShadow: buttonStyle.boxShadow,
					color: buttonStyle.color
				}}
				className={'button-default'}
				onClick={() => props.handleInput(props.sym)}
				onMouseEnter={handleHover}
				onMouseLeave={handleMouseOut}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
				<h2>{buttonSymbol}</h2>
			</div>
		</>
	)
}
