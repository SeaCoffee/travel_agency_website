import { useParams } from 'react-router-dom';
import {GroupArticles} from "../GroupArticles/GroupArticles";
import React from 'react';

import {materials} from "../../materials/materials";

export const GroupArticlesPage = () => {
    const { category } = useParams();
    const filteredArticles = materials.filter(article => article.category === category);

    return (
        <div>
            <GroupArticles articles={filteredArticles} />
        </div>
    );
};

export default GroupArticlesPage;
