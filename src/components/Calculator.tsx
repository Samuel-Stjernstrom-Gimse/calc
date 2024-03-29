import { Button } from './Button.tsx'
import { useState } from 'react'
import { Screen } from './Screen.tsx'

export const Calculator = () => {
	const numberArray: string[] = [
		'7',
		'8',
		'9',
		'del',
		'4',
		'5',
		'6',
		'+',
		'1',
		'2',
		'3',
		'-',
		'0',
		'.',
		'=',
		'*',
		'(',
		')',
		'Math.sqrt(',
		'/',
		'Math.sin(',
		'Math.cos(',
		'Math.tan(',
		'/100'
	]

	const [sum, setSum] = useState<string>('')
	const [calculation, setCalculation] = useState<string[]>([])
	const [drawScreen, setDrawScreen] = useState<string[]>([])
	const [theme, setTheme] = useState<string>('1')

	const handleNumberArray = (inputNumber: string): void => {
		const screenInput: string =
			inputNumber === 'Math.cos('
				? 'cos('
				: inputNumber === 'Math.sin('
					? 'sin('
					: inputNumber === 'Math.tan('
						? 'tan('
						: inputNumber === 'Math.sqrt('
							? '√('
							: inputNumber === '/100'
								? '%'
								: inputNumber === 'del'
									? ' '
									: inputNumber

		if (inputNumber === '=') {
			setSum(eval(calculation.join('')))
		} else if (inputNumber === 'del') {
			setCalculation((current: string[]) => {
				if (calculation.length === 1) {
					return [' ']
				} else {
					return current.slice(0, -1)
				}
			})

			setDrawScreen((current: string[]): [string] | string[] => {
				if (drawScreen.length === 1) {
					return [' ']
				} else {
					return current.slice(0, -1)
				}
			})

			setSum(eval(calculation.slice(0, -1).join('')))
		} else {
			setDrawScreen((prevState: string[]) => [...prevState, screenInput])
			setCalculation((current: string[]) => [...current, inputNumber])
			setSum(eval(calculation.join('') + inputNumber))
		}
	}

	const handleTheme = (event) => {
		console.log(event.target.value)
		setTheme(event.target.value)
	}

	const bgColor = theme === '1' ? 'hsl(223, 31%, 20%)' : theme === '2' ? ' hsl(0, 5%, 81%)' : ' hsl(268, 71%, 12%)'

	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '40vw'
				}}
			>
				<div style={{ display: 'flex' }}>
					<h2>calc</h2>
					<input onChange={handleTheme} type={'range'} max={3} step={1} min={1} defaultValue={1} />
				</div>
				<Screen theme={theme} borderRadiusTopOrBottom={'top'} showScreen={sum} />
				<Screen theme={theme} borderRadiusTopOrBottom={'bottom'} showScreen={drawScreen.join('')} />
				<div
					className={'calculator-default'}
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(4, 1fr)',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						backgroundColor: bgColor
					}}
				>
					{numberArray.map((numberInput: string) => {
						return (
							<Button theme={theme} key={numberInput} handleInput={handleNumberArray} sym={numberInput} />
						)
					})}
				</div>
			</div>
		</>
	)
}
