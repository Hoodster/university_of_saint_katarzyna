import SlideBase from "./SlideBase/SlideBase";
import TitleSlide from "./TitleSlide";

function useTemplate({ bgSource, template, headline, subHeadlines, options }) {
    template = template || 'default';

    const Template = Templates[template];
    return (
        <Template bgSource={bgSource} headline={headline} subHeadlines={subHeadlines} options={options} />
    )
}

export const Templates = Object.freeze({
    default: <SlideBase />,
    title: <TitleSlide />
})

export default useTemplate;