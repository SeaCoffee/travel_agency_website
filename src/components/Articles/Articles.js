import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {GroupArticles} from "../GroupArticles/GroupArticles";
import {materials} from "../../materials/materials";


const groupArticlesByCategory = (articles) => {
    return articles.reduce((acc, article) => {
        if (!acc[article.category]) {
            acc[article.category] = [];
        }
        acc[article.category].push(article);
        return acc;
    }, {});
};

const groupedArticles = groupArticlesByCategory(materials);

export const Articles = () => {
    return (
        <div>
            {Object.keys(groupedArticles).map((category) => (
                <div key={category}>
                    <Link to={`/articles/category/${category}`} style={{ textDecoration: 'none' }}>
                        <Typography variant="h4">{category}</Typography>
                    </Link>
                    <GroupArticles articles={groupedArticles[category]} />
                </div>
            ))}
        </div>
    );
};
