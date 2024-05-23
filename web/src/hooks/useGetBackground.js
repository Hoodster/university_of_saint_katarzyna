import Granim from "granim";

/**
 * 
 * @param {*} source 
 * @param {SourceType} sourceType 
 * @returns {JSX.Element}
 */
function useGetBackground(source, sourceType) {
	const getVideoComponent = () => (
		<video src={source} loop autoPlay muted />
	);

	const getGradientComponent = () => {
		new Granim({
			element: '#gradient-background',
			direction: 'top-bottom',
			stateTransitionSpeed: 0.4,
			states: {
				"default-state": {
					gradients: [
						['#ff9966', '#ff5e62'],
						['#00F260', '#0575E6'],
						['#e1eec3', '#f05053']
					]
				}
			}
		})
		return <canvas id="gradient-background" />
	}

	switch (sourceType) {
		case SourceType.video:
			return getVideoComponent();
		case SourceType.gradient:
			return getGradientComponent();
		default:
			console.warn('Invalid data type');
			return <></>;
	}
}

export default useGetBackground;

export const SourceType = Object.freeze({
	video: 0,
	gradient: 1
});