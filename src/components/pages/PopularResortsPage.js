import {ArticlesList} from "../Articles/ArticlesList";
import {resorts} from "../../materials/materials";


export const PopularResortsPage = () => {
    return <ArticlesList articles={resorts} basePath="/resorts" />;
};