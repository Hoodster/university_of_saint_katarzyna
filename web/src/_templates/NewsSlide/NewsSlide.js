import Blog from "../../components/blog/blog";
import styles from './NewsSlide.module.scss';

export default function NewsSlide({options}) {
    const articles = options.articles;

    return (
        <div className={styles.container}>
            <Blog className={styles.blog} articles={articles}/>
        </div>
    );
};