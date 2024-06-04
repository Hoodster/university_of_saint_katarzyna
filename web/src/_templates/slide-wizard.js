import { Templates } from "./templates";

/**
 * Mixes templates with input data.
 * @param {string} headline - slide main headline
 * @param {string[]} subHeadlines - (optional) slide lower importance headlines
 * @param {Object} options - (optional) additional options dependant on template
 * @param {string} template - (optional) template key @default default
 * @returns {JSX.Element} Slide component
 */
function SlideWizard({
    headline, 
    subHeadlines = [], 
    options = {}, 
    template='default',
}) {
    const renderSlide = () => {
        const Template = Templates[template];
        return <Template headline={headline} subHeadlines={subHeadlines} options={options}/>
    }

    return renderSlide();
};

export default SlideWizard;