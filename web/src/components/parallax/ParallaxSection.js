import styles from './parallax.module.scss';
import useGetBackground, { SourceType } from '../../hooks/useGetBackground';
import TitleSlide from '../../_templates/TitleSlide/TitleSlide';

function ParallaxSection({ bgSource, template, headline, subHeadlines, options }) {
    //const section = useTemplate({ template, headline, subHeadlines, options });
    const background = useGetBackground(bgSource, SourceType.video);
    return (
        <div className={styles.content}>
            {background}
            <TitleSlide headline={headline} subHeadlines={subHeadlines} options={options} />
        </div>
    )
}

export default ParallaxSection