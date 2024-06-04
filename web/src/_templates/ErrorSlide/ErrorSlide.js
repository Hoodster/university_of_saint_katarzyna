import styles from './ErrorSlide.module.scss';

function ErrorSlide({headline, subHeadlines}) {
    return (
        <div className={styles.container}>
            <div className={styles.headline}>{headline}</div>
            <div className={styles.subheadlines}>{subHeadlines}</div>
        </div>
    );
};

export default ErrorSlide;