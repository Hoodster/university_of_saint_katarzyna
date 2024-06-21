import { useEffect, useMemo } from "react";
import ParallaxContainer from "../components/parallax/ParallaxContainer";

const PageBase = ({ contentKey }) => {
	const pageSettings = window.content[contentKey];
	const { slides, options } = pageSettings;

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	})

	return <ParallaxContainer options={options} slides={slides} />
}

export default PageBase;