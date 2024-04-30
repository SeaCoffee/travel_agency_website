import React from 'react';

import './articlesList.css';

import {ArticleCard} from "../ArticleCard/ArticleCard";


export const ArticlesList = ({ articles, basePath }) => {
    if (!articles || !Array.isArray(articles)) {
        return <p>Статьи не найдены.</p>;
    }

    return (
        <div className="articles-container">
            {articles.map((article) => (
                <ArticleCard article={article} basePath={basePath} key={article.id} />
            ))}
        </div>
    );
};



