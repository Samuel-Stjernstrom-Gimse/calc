import { Button } from './Button.tsx'
import React, { useState } from 'react'
import { Screen } from './Screen.tsx'
import { inputMappings, numberArray, themes } from '../helpers/typesAndArrays.ts'

export const Calculator = () => {
	const [sum, setSum] = useState<string>('')
	const [calculation, setCalculation] = useState<string[]>([])
	const [drawScreen, setDrawScreen] = useState<string[]>([])
	const [theme, setTheme] = useState<'1' | '2' | '3'>('1')

	const handleNumberArray = (inputNumber: string): void => {
		const screenInput: string = inputMappings[inputNumber] || inputNumber

		if (inputNumber === '=') {
			const result = eval(calculation.join(''))
			setSum(result)
			setCalculation([result.toString()])
			setDrawScreen([result.toString()])
		} else if (inputNumber === 'del') {
			setCalculation((current: string[]) => {
				return calculation.length === 1 ? [' '] : current.slice(0, -1)
			})
			setDrawScreen((current: string[]): [string] | string[] => {
				return drawScreen.length === 1 ? [' '] : current.slice(0, -1)
			})
			setSum(eval(calculation.slice(0, -1).join('')))
		} else {
			setDrawScreen((prevState: string[]) => [...prevState, screenInput])
			setCalculation((current: string[]) => [...current, inputNumber])
			setSum(eval(calculation.join('') + inputNumber))
		}
	}

	const handleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value)
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		setTheme(event.target.value)
	}

	const bgColorButtons: string =
		theme === '1'
			? themes.theme1.backgroundColorButtons
			: theme === '2'
				? themes.theme2.backgroundColorButtons
				: themes.theme3.backgroundColorButtons
	const bgColor: string =
		theme === '1'
			? themes.theme1.backgroundColor
			: theme === '2'
				? themes.theme2.backgroundColor
				: themes.theme3.backgroundColor

	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: bgColor
			}}
		>
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
				<Screen liveScreen={true} theme={theme} borderRadiusTopOrBottom={'top'} showScreen={sum} />
				<Screen
					liveScreen={false}
					theme={theme}
					borderRadiusTopOrBottom={'bottom'}
					showScreen={drawScreen.join('')}
				/>
				<div
					className={'calculator-default'}
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(4, 1fr)',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						backgroundColor: bgColorButtons
					}}
				>
					{numberArray.map((numberInput: string) => {
						return (
							<Button theme={theme} key={numberInput} handleInput={handleNumberArray} sym={numberInput} />
						)
					})}
				</div>
			</div>
		</div>
	)
}
