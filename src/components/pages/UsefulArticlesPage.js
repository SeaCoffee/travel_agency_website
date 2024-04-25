import {useful} from "../../materials/materials";
import {ArticlesList} from "../Articles/ArticlesList";


export const UsefulArticlesPage = () => {
    return (
        <div>
            <ArticlesList articles={useful} basePath="/useful" />
        </div>
    );
};