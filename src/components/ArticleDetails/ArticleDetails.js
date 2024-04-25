import React, { useState, useEffect } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid, Modal, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const ArticleDetails = ({ article }) => {
    const [open, setOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        maxHeight: '80vh',
        display: 'block',
        outline: 'none',
        boxShadow: 'none',
        overflow: 'hidden',
    };

    useEffect(() => {
        const img = new Image();
        img.src = article.imageUrl;
        img.onload = () => setImageLoaded(true);
    }, [article.imageUrl]);


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                <Card sx={{
                    width: '85%',
                    display: 'flex',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                    borderRadius: '20px',
                    mb: 2,
                    overflow: 'visible',
                }}>
                    <Grid container>
                        <Grid item xs={12} sm={4}>
                            {imageLoaded ? (
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: '115%',
                                        maxHeight: 345,
                                        objectFit: 'contain',
                                        borderRadius: 'inherit',
                                        my: 2,
                                    }}
                                    image={article.imageUrl}
                                    alt={article.title}
                                    onClick={handleClickOpen}
                                />
                            ) : (
                                <Box sx={{ width: '115%', height: 345, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CircularProgress />
                                </Box>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {article.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
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
                sx={{
                    overflow: 'hidden',
                }}
            >
                <Box sx={modalStyle}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        style={{
                            width: '100%',
                            maxHeight: '80vh',
                            boxShadow: 'none'
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
};
