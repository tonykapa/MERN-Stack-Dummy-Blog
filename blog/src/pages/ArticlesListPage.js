import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";

const ArticlesListPage = () => {
    return(
        <>
        <h1>Articles List Page.</h1>
        <ArticlesList articles={articles}></ArticlesList>
        </>
    )
}

export default ArticlesListPage;