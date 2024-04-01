import { useState } from 'react'
import { ButtonStyle, symbolMap, Theme } from '../helpers/typesAndArrays.ts'

interface Props {
	sym: string
	handleInput: (inputNumber: string) => void
	colorTheme: Theme
}

export const Button = (props: Props) => {
	const [hover, setHover] = useState(false)
	const [click, setClick] = useState(false)
	const theme: Theme = props.colorTheme
	const buttonSymbol = symbolMap[props.sym] || props.sym

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
