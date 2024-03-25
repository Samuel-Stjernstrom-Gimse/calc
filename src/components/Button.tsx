import { useState } from 'react'

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

	const themes = {
		theme1: {
			modes: {
				still: {
					backgroundColor: 'hsl(30, 25%, 89%)',
					boxShadow: '0 5px hsl(28, 16%, 65%)',
					color: 'hsl(221, 14%, 31%)'
				},
				hover: {
					backgroundColor: 'hsl(30, 25%, 79%)',
					boxShadow: '0 5px hsl(28, 16%, 55%)',
					color: 'hsl(221, 14%, 31%)'
				},
				active: {
					backgroundColor: 'hsl(30, 25%, 69%)',
					boxShadow: '0 5px hsl(28, 16%, 45%)',
					color: 'hsl(221, 14%, 31%)'
				}
			}
		},
		theme2: {
			modes: {
				still: {
					backgroundColor: 'hsl(45, 7%, 89%)',
					boxShadow: '0 5px hsl(35, 11%, 61%)',
					color: 'hsl(60, 10%, 19%)'
				},
				hover: {
					backgroundColor: 'hsl(45, 7%, 79%)',
					boxShadow: '0 5px hsl(35, 11%, 51%)',
					color: 'hsl(60, 10%, 19%)'
				},
				active: {
					backgroundColor: 'hsl(45, 7%, 69%)',
					boxShadow: '0 5px hsl(35, 11%, 41%)',
					color: 'hsl(60, 10%, 19%)'
				}
			}
		},
		theme3: {
			modes: {
				still: {
					backgroundColor: 'hsl(268, 47%, 21%)',
					boxShadow: '0 5px hsl(290, 70%, 36%)',
					color: 'hsl(52, 100%, 62%)'
				},
				hover: {
					backgroundColor: 'hsl(268, 47%, 31%)',
					boxShadow: '0 5px hsl(290, 70%, 46%)',
					color: 'hsl(52, 100%, 62%)'
				},
				active: {
					backgroundColor: 'hsl(268, 47%, 41%)',
					boxShadow: '0 5px hsl(290, 70%, 56%)',
					color: 'hsl(52, 100%, 62%)'
				}
			}
		}
	}

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
		props.theme === '1' ? themes.theme1.modes : props.theme === '2' ? themes.theme2.modes : themes.theme3.modes
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
