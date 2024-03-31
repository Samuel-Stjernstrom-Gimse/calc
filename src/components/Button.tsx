import { useState } from 'react'
import { themes } from '../helpers/typesAndArrays'

interface Props {
	sym: string
	handleInput: (inputNumber: string) => void
	theme: '1' | '2' | '3'
}

interface ButtonStyle {
	backgroundColor: string
	boxShadow: string
	color: string
}

interface ButtonStates {
	active: ButtonStyle
	hover: ButtonStyle
	still: ButtonStyle
}

interface ButtonStyles {
	primary: ButtonStates
	secondary: ButtonStates
	tertiary: ButtonStates
}

interface Theme {
	backgroundColorScreen?: string
	buttonStyle: ButtonStyles
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

	const theme: Theme = props.theme === '1' ? themes.theme1 : props.theme === '2' ? themes.theme2 : themes.theme3

	let colorStyle: ButtonStyle =
		props.sym === 'del'
			? theme.buttonStyle.tertiary.still
			: props.sym === '='
				? theme.buttonStyle.secondary.still
				: theme.buttonStyle.primary.still

	if (click) {
		colorStyle =
			props.sym === 'del'
				? theme.buttonStyle.tertiary.active
				: props.sym === '='
					? theme.buttonStyle.secondary.active
					: theme.buttonStyle.primary.active
	} else if (hover) {
		colorStyle =
			props.sym === 'del'
				? theme.buttonStyle.tertiary.hover
				: props.sym === '='
					? theme.buttonStyle.secondary.hover
					: theme.buttonStyle.primary.hover
	}

	return (
		<>
			<div
				style={{
					backgroundColor: colorStyle.backgroundColor,
					boxShadow: colorStyle.boxShadow,
					color: colorStyle.color
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
