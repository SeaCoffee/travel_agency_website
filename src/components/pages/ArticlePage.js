import {ArticleDetails} from "../ArticleDetails/ArticleDetails";

import {useParams, useLocation} from "react-router-dom";
import {useful, resorts} from "../../materials/materials";


export const ArticlePage = () => {
    const { articleId } = useParams();
    const location = useLocation();
    console.log("ArticlePage Rendered", { articleId, path: location.pathname });
    let articles = [];

    if (location.pathname.includes('/useful/')) {
        articles = useful;
    } else if (location.pathname.includes('/resorts/')) {
        articles = resorts;
    }

    const article = articles.find(article => article.id.toString() === articleId);
    if (!article) {
        return <p>Статья не найдена.</p>;
    }

    return <ArticleDetails article={article} />;
};
