import { Themes } from './typesAndArrays.ts'

export const themes: Themes = {
	theme1: {
		backgroundColor: 'rgb(59,69,99)',
		backgroundColorScreen: 'hsl(224,35%,15%)',
		backgroundColorButtons: 'hsl(224,29%,20%)',
		fontColorScreen: 'hsl(0,0%,99%)',
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
			secondary: {
				still: {
					backgroundColor: 'hsl(224,21%,49%)',
					boxShadow: '0 5px hsl(225,27%,35%)',
					color: 'hsl(180,20%,99%)'
				},
				hover: {
					backgroundColor: 'hsl(224,18%,53%)',
					boxShadow: '0 5px hsl(224,27%,31%)',
					color: 'hsl(221, 14%, 31%)'
				},
				active: {
					backgroundColor: 'hsl(224,49%,75%)',
					boxShadow: '0 5px hsl(224,27%,31%)',
					color: 'hsl(180,20%,99%)'
				}
			},
			tertiary: {
				still: {
					backgroundColor: 'hsl(6,62%,50%)',
					boxShadow: '0 5px hsl(6,73%,32%)',
					color: 'hsl(180,43%,99%)'
				},
				hover: {
					backgroundColor: 'hsl(4,78%,59%)',
					boxShadow: '0 5px hsl(6,70%,34%)',
					color: 'hsl(180,33%,98%)'
				},
				active: {
					backgroundColor: 'hsl(6,91%,66%)',
					boxShadow: '0 5px hsl(6,70%,34%)',
					color: 'hsl(180,43%,99%)'
				}
			}
		}
	},
	theme2: {
		backgroundColor: 'rgb(228,228,228)',
		backgroundColorScreen: 'hsl(0,0%,93%)',
		backgroundColorButtons: 'hsl(0,6%,81%)',
		fontColorScreen: 'hsl(60, 10%, 19%)',
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
			secondary: {
				still: {
					backgroundColor: 'hsl(184,43%,37%)',
					boxShadow: '0 5px hsl(186,55%,26%)',
					color: 'hsl(60,33%,99%)'
				},
				hover: {
					backgroundColor: 'hsl(184,43%,37%)',
					boxShadow: '0 5px hsl(186,55%,26%)',
					color: 'hsl(60,33%,99%)'
				},
				active: {
					backgroundColor: 'hsl(185,40%,56%)',
					boxShadow: '0 5px hsl(186,55%,26%)',
					color: 'hsl(60,33%,99%)'
				}
			},
			tertiary: {
				still: {
					backgroundColor: 'hsl(25,99%,39%)',
					boxShadow: '0 5px hsl(22,100%,29%)',
					color: 'hsl(20,43%,99%)'
				},
				hover: {
					backgroundColor: 'hsl(25,82%,47%)',
					boxShadow: '0 5px hsl(22,100%,29%)',
					color: 'hsl(20,43%,99%)'
				},
				active: {
					backgroundColor: 'hsl(25,98%,61%)',
					boxShadow: '0 5px hsl(22,100%,29%)',
					color: 'hsl(20,43%,99%)'
				}
			}
		}
	},
	theme3: {
		backgroundColor: 'rgb(23,6,42)',
		backgroundColorScreen: 'hsl(269,74%,12%)',
		backgroundColorButtons: 'hsl(268,75%,12%)',
		fontColorScreen: 'hsl(53,97%,62%)',
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
			secondary: {
				still: {
					backgroundColor: 'hsl(279,76%,28%)',
					boxShadow: '0 5px hsl(286,90%,52%)',
					color: 'hsl(150,50%,98%)'
				},
				hover: {
					backgroundColor: 'hsl(280,84%,31%)',
					boxShadow: '0 5px hsl(286,90%,52%)',
					color: 'hsl(150,50%,98%)'
				},
				active: {
					backgroundColor: 'hsl(281,56%,44%)',
					boxShadow: '0 5px hsl(286,90%,52%)',
					color: 'hsl(150,50%,98%)'
				}
			},
			tertiary: {
				still: {
					backgroundColor: 'hsl(176,100%,43%)',
					boxShadow: '0 5px hsl(177,96%,78%)',
					color: 'hsl(197,40%,12%)'
				},
				hover: {
					backgroundColor: 'hsl(177,59%,62%)',
					boxShadow: '0 5px hsl(177,96%,78%)',
					color: 'hsl(197,40%,12%)'
				},
				active: {
					backgroundColor: 'hsl(177,96%,78%)',
					boxShadow: '0 5px hsl(177,96%,78%)',
					color: 'hsl(197,40%,12%)'
				}
			}
		}
	}
}
