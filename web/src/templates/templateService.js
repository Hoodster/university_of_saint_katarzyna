import BasicSlide from "./BasicSlide"
import TitleSlide from "./TitleSlide";

function getTemplate({ bgSource, template, headline, subHeadlines, options }) {
    const Template = Templates[template];
    return (
        <Template bgSource={bgSource} headline={headline} subHeadlines={subHeadlines} options={options} />
    )
}

const Templates = {
    '': <BasicSlide />,
    'title': <TitleSlide />
}

export default getTemplate