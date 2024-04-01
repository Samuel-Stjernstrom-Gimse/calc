export const numberArray: string[] = [
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

export interface ButtonStyle {
	backgroundColor: string
	boxShadow: string
	color: string
}

interface ButtonStates {
	still: ButtonStyle
	hover: ButtonStyle
	active: ButtonStyle
}

export interface ButtonStyles {
	primary: ButtonStates
	secondary: ButtonStates
	tertiary: ButtonStates
}

export interface Theme {
	backgroundColorScreen: string
	backgroundColorButtons: string
	backgroundColor: string
	fontColorScreen: string
	buttonStyle: ButtonStyles
}

export interface Themes {
	[key: string]: Theme
}

export const inputMappings: { [key: string]: string } = {
	'Math.cos(': 'cos(',
	'Math.sin(': 'sin(',
	'Math.tan(': 'tan(',
	'Math.sqrt(': '√(',
	'/100': '%',
	del: ' ',
	'*': 'x',
	'/': '÷'
}
interface SymbolMap {
	[key: string]: string
}
export const symbolMap: SymbolMap = {
	'Math.sqrt(': '√',
	'Math.cos(': 'cos',
	'Math.sin(': 'sin',
	'Math.tan(': 'tan',
	'/100': '%',
	'*': 'x',
	'/': '÷'
}
