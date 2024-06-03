import Article from "./article";

function Blog({articles}) {
    return (
        <div >
            {articles.map(article => <Article 
            title={article.title} 
            author={article.author}
            paragraphs={article.paragraphs}
            creationDate={article.date}
            /> )}
        </div>
    );
};

export default Blog;