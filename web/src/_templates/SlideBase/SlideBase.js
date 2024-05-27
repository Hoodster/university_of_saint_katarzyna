import styles from './SlideBase.module.scss';

function SlideBase({ headline, subHeadlines, options }) {
    return (
        <div className={styles.container}>
            <div className={styles.headline}>
                <h1 className={headline}>{headline}</h1>
            </div>
            <div className={styles.subheadlines}>
                {subHeadlines.map((hline, index) => <h2 key={`st-headline-${index}`}>{hline}</h2>)}
            </div>
        </div>
    )
}

export default SlideBase