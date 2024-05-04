import React from 'react';

import './articlesList.css';

import {ArticleCard} from "../ArticleCard/ArticleCard";
import BackButton from "../BackButton/BackButton";


export const ArticlesList = ({ articles, basePath }) => {
    if (!articles || !Array.isArray(articles)) {
        return <p>Статьи не найдены.</p>;
    }

    return (
        <div
            style={{display: 'flex', flexDirection: 'column'}}> {/* Внешний контейнер для вертикального расположения */}
            <div style={{display: 'flex', flexDirection: 'row', position: 'relative'}}> {/* Контейнер для статей */}
                <div className="articles-container" style={{flex: 1}}>
                    {articles.map((article) => (
                        <ArticleCard article={article} basePath={basePath} key={article.id}/>
                    ))}
                </div>
            </div>
            <div style={{
                alignSelf: 'flex-start',
                margin: '5px 20px'
            }}> {/* Кнопка "Назад", расположенная под контейнером со статьями */}
                <BackButton/>
            </div>
        </div>
    );
}

