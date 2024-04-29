import React from "react";
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

import { Link } from 'react-router-dom';




export const ArticleCard = ({ article, basePath }) => {
    return (
        <Link to={`${basePath}/${article.id}`} style={{ textDecoration: 'none' }}>
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
