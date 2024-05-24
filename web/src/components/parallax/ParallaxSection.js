import styles from './parallax.module.scss';
import useGetBackground, { SourceType } from '../../hooks/useGetBackground';
import TitleSlide from '../../_templates/TitleSlide/TitleSlide';
import clsx from 'clsx';

function ParallaxSection({ bgSource, template, headline, subHeadlines, options }) {
   // const section = useTemplate({ template, headline, subHeadlines, options });

    const {source, type} = bgSource;
   //const Background = useGetBackground('../../assets/pex.jpg', SourceType.image);

    return (
        <>
        <div className={styles.content}>
            <TitleSlide headline={headline} subHeadlines={subHeadlines} options={options} />
        </div>
        </>
    )
}

export default ParallaxSection