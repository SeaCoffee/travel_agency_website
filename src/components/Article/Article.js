import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { Link } from 'react-router-dom';


const article = {
    id: 1,
    title: "Заголовок статьи",
    content: "Полное содержание статьи",
    imageUrl: "https://via.placeholder.com/150"
};


export const Article = ({ article }) => {
    return (
        <Link to={`/articles/${article.id}`} style={{ textDecoration: 'none' }}>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={article.imageUrl}
                    alt={article.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {article.content}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};