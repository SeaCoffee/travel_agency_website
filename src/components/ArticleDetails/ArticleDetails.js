import React, { useState, useEffect } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid, Modal, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './articleDetails.css'

export const ArticleDetails = ({ article }) => {
    const [open, setOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const img = new Image();
        img.src = article.imageUrl;
        img.onload = () => setImageLoaded(true);
    }, [article.imageUrl]);

    return (
        <>
            <Box className="cardBox">
                <Card className="cardStyle">
                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            {imageLoaded ? (
                                <CardMedia
                                    component="img"
                                    className="cardMedia"
                                    image={article.imageUrl}
                                    alt={article.title}
                                    onClick={handleClickOpen}
                                />
                            ) : (
                                <Box className="loadingBox">
                                    <CircularProgress />
                                </Box>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <CardContent className="cardContent">
                                <Typography gutterBottom variant="h5" component="div">
                                    {article.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" className="typographyTitle">
                                    {article.fullText}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modalStyle"
            >
                <Box className="modalStyle">
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        className="closeButton"
                        sx={{
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="modalImg"
                    />
                </Box>
            </Modal>
        </>
    );
};
