import { Theme } from '../helpers/typesAndArrays.ts'

type Props = {
	theme: '1' | '2' | '3'
	colorTheme: Theme
	handler: () => void
}

const Switch = (props: Props) => {
	const align = props.theme === '1' ? 'start' : props.theme === '2' ? 'center' : 'end'
	return (
		<div style={{ display: 'flex', alignItems: 'end', overflow: 'visible' }}>
			<h1 style={{ fontSize: 20, paddingRight: 5, color: props.colorTheme.fontColorScreen }}>theme</h1>
			<div>
				<div style={{ display: 'flex', width: '2rem', justifyContent: 'space-around', fontSize: '0.3rem' }}>
					<h6 style={{ fontSize: 14, color: props.colorTheme.fontColorScreen }}>1</h6>
					<h6 style={{ fontSize: 14, color: props.colorTheme.fontColorScreen }}> 2</h6>
					<h6 style={{ fontSize: 14, color: props.colorTheme.fontColorScreen }}>3</h6>
				</div>
				<div
					onClick={props.handler}
					style={{
						position: 'relative',
						width: '2rem',
						height: '0.6rem',
						backgroundColor: props.colorTheme.backgroundColorButtons,
						borderRadius: '0.35rem',
						display: 'flex',
						alignItems: 'center',
						padding: '1px',
						justifyContent: align,
						transition: '0.2s'
					}}
				>
					<div
						style={{
							transition: '0.9s',
							height: '0.5rem',
							width: '0.5rem',
							borderRadius: '50%',
							backgroundColor: props.colorTheme.buttonStyle.tertiary.still.backgroundColor
						}}
					></div>
				</div>
			</div>
		</div>
	)
}

export default Switch
