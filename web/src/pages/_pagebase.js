import ParallaxContainer from "../components/parallax/ParallaxContainer";
import ParallaxSection from "../components/parallax/ParallaxSection";

function PageBase({ contentKey }) {
	const slidesData = window.content[contentKey].slides;
	const options = window.content[contentKey].options;

	return (
		<ParallaxContainer>
			{slidesData.map((slide, i) => <ParallaxSection key={`${contentKey}-section-${++i}`} bgSource={slide.bgSource} options={options} headline={slide.headline} subHeadlines={slide.subHeadlines} />)}
		</ParallaxContainer>
	)
}

export default PageBase;