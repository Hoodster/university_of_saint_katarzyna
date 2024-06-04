import styles from './TitleSlide.module.scss';
import clsx from 'clsx';

function TitleSlide({ headline, subHeadlines, options }) {
    const areSubheadlinesEmpty = subHeadlines.length === 0;

    return (
        <div className={clsx(styles.container, areSubheadlinesEmpty ? styles.head : styles.sub)}>
            <div className={styles.headline}>
                <h1>{headline}</h1>
            </div>
            {!areSubheadlinesEmpty ?? <div className={styles.subheadlines}>
                {subHeadlines.map((sline, index) => <h2 key={`st-headline-${index}`}>{sline}</h2>)}
            </div>}
        </div>
    )
}
export default TitleSlide