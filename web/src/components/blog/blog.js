import clsx from "clsx";
import Article from "./article";
import styles from './blog.module.scss';

function Blog({articles, className}) {
    return (
        <div className={clsx(styles.container, className)} >
            <div>
            {articles.map(article => <Article 
            title={article.title} 
            author={article.author}
            paragraphs={article.paragraphs}
            creationDate={article.date}
            /> )}
            </div>
        </div>
    );
};

export default Blog;