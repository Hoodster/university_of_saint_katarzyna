import ActionSlide from "./ActionSlide/ActionSlide";
import SlideBase from "./SlideBase/SlideBase";
import TitleSlide from "./TitleSlide/TitleSlide";

function useTemplate({ template, headline, subHeadlines, options }) {
    template = template || 'default';

    const Template = Templates[template];
    return (
        <Template headline={headline} subHeadlines={subHeadlines} options={options} />
    )
}

export const Templates = Object.freeze({
    'default': <SlideBase />,
    'title': <TitleSlide />,
    'action': <ActionSlide />
})

export default useTemplate;