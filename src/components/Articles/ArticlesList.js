import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

import {useful, resorts} from "../../materials/materials";
import styles from './articlesList.css';

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



