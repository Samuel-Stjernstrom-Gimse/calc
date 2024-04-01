import { useState } from 'react'
import { ButtonStates, ButtonStyle, symbolMap, Theme } from '../helpers/typesAndArrays.ts'

interface Props {
	sym: string
	handleInput: (inputNumber: string) => void
	colorTheme: Theme
}

export const Button = (props: Props) => {
	const [hover, setHover] = useState<boolean>(false)
	const [click, setClick] = useState<boolean>(false)
	const buttonSymbol: string = symbolMap[props.sym] || props.sym
	const colorStyle: ButtonStates =
		props.sym === 'del'
			? props.colorTheme.buttonStyle.tertiary
			: props.sym === '='
				? props.colorTheme.buttonStyle.secondary
				: props.colorTheme.buttonStyle.primary

	const color: ButtonStyle = click ? colorStyle.active : hover ? colorStyle.hover : colorStyle.still

	const handleHover = (): void => {
		setHover(true)
	}

	const handleMouseOut = (): void => {
		setHover(false)
		setClick(false)
	}

	const handleMouseDown = (): void => {
		setClick(true)
	}

	const handleMouseUp = (): void => {
		setClick(false)
	}

	return (
		<>
			<div
				style={{
					backgroundColor: color.backgroundColor,
					boxShadow: color.boxShadow,
					color: color.color
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
