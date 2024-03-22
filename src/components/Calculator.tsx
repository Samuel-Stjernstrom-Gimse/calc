import { Button } from './Button.tsx'
import { useState } from 'react'

export const Calculator = () => {
	const numberArray: (string | number)[] = [7, 8, 9, 4, 5, 6, 1, 2, 2, 0, '.', '=']
	const symArray: string[] = ['/', '*', '-', '+']
	const [currentStep, setCurrentStep] = useState<string>(0)
	const currentCalculation = []

	const handleSum = () => {}

	const handleNumberArray = (inputNumber: number | string) => {
		if (inputNumber === '=') {
			handleSum()
		} else
			setCurrentStep((prevState: string) => {
				return prevState + inputNumber.toString
			})
	}

	const handleSymArray = (inputSym: string) => {
		currentCalculation.push(currentStep)
		setCurrentStep(inputSym)
		currentCalculation.push(inputSym)
	}

	return (
		<>
			<div style={{ display: 'flex' }}>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, 1fr)',
						gridGap: '10px',
						width: '300px'
					}}
				>
					{numberArray.map((numberInput: string | number) => {
						return <Button handleNumber={handleNumberArray} sym={numberInput} />
					})}
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
					{symArray.map((number: string) => {
						return <Button sym={number} />
					})}
				</div>
			</div>
		</>
	)
}
