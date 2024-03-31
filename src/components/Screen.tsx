import { themes } from '../helpers/typesAndArrays.ts'

interface Props {
	showScreen: string | number
	borderRadiusTopOrBottom: 'top' | 'bottom'
	theme: string
	liveScreen: boolean
}

export const Screen = (props: Props) => {
	const screenColor: string =
		props.theme === '1'
			? themes.theme1.backgroundColorScreen
			: props.theme === '2'
				? themes.theme2.backgroundColorScreen
				: themes.theme3.backgroundColorScreen

	const fontColor: string =
		props.theme === '1'
			? themes.theme1.fontColorScreen
			: props.theme === '2'
				? themes.theme2.fontColorScreen
				: themes.theme3.fontColorScreen

	return (
		<>
			<div
				style={
					props.borderRadiusTopOrBottom === 'top'
						? { borderRadius: '10px 10px 0 0', backgroundColor: screenColor }
						: { borderRadius: '0 0 10px 10px', backgroundColor: screenColor }
				}
				className={'screen-default'}
			>
				{props.liveScreen ? <h6 className={'live-calc'}>live calc</h6> : null}
				<h2 style={{ fontFamily: 'League Spartan', color: fontColor }}>{props.showScreen}</h2>
			</div>
		</>
	)
}
