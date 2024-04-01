import { Button } from './Button.tsx'
import { useState } from 'react'
import { Screen } from './Screen.tsx'
import { inputMappings, numberArray, Theme } from '../helpers/typesAndArrays.ts'
import { themes } from '../helpers/theme.ts'
import Switch from './Switch.tsx'

export const Calculator = () => {
	const [sum, setSum] = useState<string>('')
	const [calculation, setCalculation] = useState<string[]>([])
	const [drawScreen, setDrawScreen] = useState<string[]>([])
	const [theme, setTheme] = useState<'1' | '2' | '3'>('1')
	const colorTheme: Theme = themes[`theme${theme}`]
	const bgColorButtons: string = colorTheme.backgroundColorButtons
	const bgColor: string = colorTheme.backgroundColor

	const handleNumberArray = (inputNumber: string): void => {
		const screenInput: string = inputMappings[inputNumber] || inputNumber

		if (inputNumber === '=') {
			const result = eval(calculation.join(''))
			setSum(result)
			setCalculation([result.toString()])
			setDrawScreen([result.toString()])
		} else if (inputNumber === 'del') {
			setCalculation((current: string[]): [string] | string[] => {
				return calculation.length === 1 ? [' '] : current.slice(0, -1)
			})
			setDrawScreen((current: string[]): [string] | string[] => {
				return drawScreen.length === 1 ? [' '] : current.slice(0, -1)
			})
			setSum(eval(calculation.slice(0, -1).join('')))
		} else if (inputNumber === 'reset') {
			setCalculation([])
			setDrawScreen([])
			setSum('')
		} else {
			setDrawScreen((prevState: string[]) => [...prevState, screenInput])
			setCalculation((current: string[]) => [...current, inputNumber])
			setSum(eval(calculation.join('') + inputNumber))
		}
	}

	const handleThemeCount = (): void => {
		if (theme === '1') setTheme('2')
		if (theme === '2') setTheme('3')
		if (theme === '3') setTheme('1')
	}

	return (
		<div
			className={'full-page'}
			style={{
				backgroundColor: bgColor
			}}
		>
			<div className={'calc-wrapper'}>
				<div
					style={{
						display: 'flex',
						gap: '24vw',
						justifyContent: 'space-between',
						width: '40vw',
						marginBottom: '1rem'
					}}
				>
					<h2 style={{ color: colorTheme.fontColorScreen, overflow: 'visible' }}>calc</h2>
					<Switch theme={theme} colorTheme={colorTheme} handler={() => handleThemeCount()} />
				</div>
				<Screen colorTheme={colorTheme} liveScreen={true} borderRadiusTopOrBottom={'top'} showScreen={sum} />
				<Screen
					colorTheme={colorTheme}
					liveScreen={false}
					borderRadiusTopOrBottom={'bottom'}
					showScreen={drawScreen.join('')}
				/>
				<div className={'calculator-default'} style={{ backgroundColor: bgColorButtons }}>
					{numberArray.map((numberInput: string) => {
						return (
							<Button
								colorTheme={colorTheme}
								key={numberInput}
								handleInput={handleNumberArray}
								sym={numberInput}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
