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

	const getGradientComponent = () => (
		<video src={source} loop />
	)

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