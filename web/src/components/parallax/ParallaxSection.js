import SlideWizard from '../../_templates/slide-wizard';
import DynamicBackground from '../dynamic-background/dynamic-background';

function ParallaxSection({slide}) {
    const { background, template, headline, subHeadlines, options } = slide;
    return (
        <DynamicBackground background={background}>
            <SlideWizard 
            template={template} 
            headline={headline} 
            subHeadlines={subHeadlines} 
            options={options} />
        </DynamicBackground>
    )
}

export default ParallaxSection