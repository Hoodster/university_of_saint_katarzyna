import { useEffect } from "react";
import ParallaxContainer from "../components/parallax/ParallaxContainer";

function PageBase({ contentKey }) {
	const pageSettings = window.content[contentKey];
	const { slides, options } = pageSettings;

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	})

	return <ParallaxContainer options={options} slides={slides} />
}

export default PageBase;