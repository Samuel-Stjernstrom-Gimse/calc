export interface ButtonStyle {
	backgroundColor: string
	boxShadow: string
	color: string
}

export interface ButtonStates {
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

interface Map {
	[key: string]: string
}

export const inputMappings: Map = {
	'Math.cos(': 'cos(',
	'Math.sin(': 'sin(',
	'Math.tan(': 'tan(',
	'Math.sqrt(': '√(',
	'/100': '%',
	del: ' ',
	'*': 'x',
	'/': '÷'
} as const

export const symbolMap: Map = {
	'Math.sqrt(': '√',
	'Math.cos(': 'cos',
	'Math.sin(': 'sin',
	'Math.tan(': 'tan',
	'/100': '%',
	'*': 'x',
	'/': '÷'
} as const

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
] as const
