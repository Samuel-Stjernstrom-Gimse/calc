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

export const themes = {
	theme1: {
		buttonStyle: {
			primary: {
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
			},
			secondary: {},
			tertiary: {}
		}
	},
	theme2: {
		buttonStyle: {
			primary: {
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
			},
			secondary: {},
			tertiary: {}
		}
	},
	theme3: {
		backgroundColorScreen: 'hsl(268, 71%, 12%)',
		buttonStyle: {
			primary: {
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
			},
			secondary: {},
			tertiary: {}
		}
	}
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
