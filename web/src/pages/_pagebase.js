import ParallaxContainer from "../components/parallax/ParallaxContainer";

function PageBase({contentKey}) {
	const pageSettings = window.content[contentKey];
	const {slides, options} = pageSettings;

	return <ParallaxContainer options={options} slides={slides}/>
}

export default PageBase;