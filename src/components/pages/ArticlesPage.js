import {useful, resorts} from "../../materials/materials";
import {ArticlesList} from "../Articles/ArticlesList";

export const ArticlesPage = () => {
    const allArticles = [...useful, ...resorts]; 
    return <ArticlesList articles={allArticles} basePath="/articles" />;
};