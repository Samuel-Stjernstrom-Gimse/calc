import { Button } from './Button.tsx'
import { useState } from 'react'
import { Screen } from './Screen.tsx'

export const Calculator = () => {
	const numberArray: string[] = ['(', ')', 'del', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '=']
	const operatorsArray: string[] = ['/', '*', '-', '+', 'Math.sin(', 'Math.cos(', 'Math.tan(', 'Math.sqrt(', '/100']
	const [sum, setSum] = useState<string>('')
	const [calculation, setCalculation] = useState<string>('')
	const [drawScreen, setDrawScreen] = useState<string[]>([])

	const handleNumberArray = (inputNumber: string): void => {
		if (inputNumber === '=') {
			setSum(eval(calculation + inputNumber))
		} else if (inputNumber === 'del') {
			setCalculation((current: string) => {
				return current.slice(0, -1)
			})
			setSum(eval(calculation.slice(0, -1)))
		} else {
			setCalculation((current: string) => current + inputNumber)
			setSum(eval(calculation + inputNumber))
		}
	}

	return (
		<>
			<Screen showScreen={sum} />
			<Screen showScreen={calculation} />
			<div style={{ display: 'flex' }}>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 1fr)',
						gridGap: '1px',
						width: '200px'
					}}
				>
					{numberArray.map((numberInput: string) => {
						return <Button handleInput={handleNumberArray} sym={numberInput} />
					})}
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					{operatorsArray.map((operator: string) => {
						return <Button handleInput={handleNumberArray} sym={operator} />
					})}
				</div>
			</div>
		</>
	)
}
