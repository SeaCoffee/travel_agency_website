import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import {materials} from "../../materials/materials";


export const GroupArticles = ({ articles }) => {
    return (
        <div>
            <Grid container spacing={3}>
                {articles.map((article) => (
                    <Grid item key={article.id} xs={12} sm={6} md={4}>
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
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

