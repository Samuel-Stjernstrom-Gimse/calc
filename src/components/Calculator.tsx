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
		'(',
		')',
		'/',
		'*',
		'Math.sin(',
		'Math.cos(',
		'Math.tan(',
		'Math.sqrt(',
		'/100'
	]

	const [sum, setSum] = useState<string>('')
	const [calculation, setCalculation] = useState<string[]>([])
	const [drawScreen, setDrawScreen] = useState<string[]>([])

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

	return (
		<>
			<Screen showScreen={sum} />
			<Screen showScreen={drawScreen.join('')} />
			<div style={{ display: 'flex' }}>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(4, 1fr)',
						gridGap: '1px',
						width: '200px'
					}}
				>
					{numberArray.map((numberInput: string) => {
						return <Button handleInput={handleNumberArray} sym={numberInput} />
					})}
				</div>
			</div>
		</>
	)
}
