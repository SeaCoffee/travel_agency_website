import React from 'react';

import { Grid, Card, CardContent, Typography, useTheme, useMediaQuery } from '@mui/material';


const cardData = [
    {
        title: "Вас вітає",
        word: "Туристична агенція Літо 365",
        description: "",
        example: 'Працюємо для Вас з 2017'
    },
    {
        title: "Співпрацюємо",
        word: "З усіма туроператорами України",
        description: "На період воєнного часу також з",
        example: 'туроператорами Польщі, Німеччини, Молдавії, Румунії'
    },
    {
        title: "Авіа/автобусні квитки",
        word: "Пакетні тури з авіа",
        description: "Автобусні тури",
        description2: "Круїзи",
        example: 'Страхуванняі',
        example2: 'Готелі'
    },
    {
        title: "Вартість всіх турів — з перших рук.",
        word: "Тут немає абсолютно ніякої націнки, жодних переплат.",
        description: "Ми працюємо за цінами туроператорів",
    },
];

function OutlinedCardsRow() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



    return (
        <Grid container spacing={2} sx={{justifyContent: 'space-around', paddingLeft: '16px', paddingRight: '16px', marginTop: '3px'}}>
            <Grid container item xs={12} spacing={2} sx={{display: 'flex', alignItems: 'stretch'}}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index} sx={{ width: '100%', maxWidth: '300px' }}>
                        <Card variant="outlined" elevation={4} sx={{
                            bgcolor: '#fffaf6',
                            height: '220px',
                            boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <CardContent className="card-content" sx={{ flex: '1 1 auto' }}>
                                <Typography color="text.secondary" gutterBottom sx={{color: '#666'}} className="card-title">
                                    {card.title}
                                </Typography>
                                <Typography variant="h5" component="div" className="card-word">
                                    {card.word}
                                </Typography>
                                <Typography variant="body2" sx={{
                                    lineHeight: '1.5',
                                    fontSize: '16px',
                                    margin: '10px 0'
                                }}>
                                    {card.description}
                                    <br/>
                                    {card.example}
                                </Typography>
                                {card.description2 && card.example2 && (
                                    <Typography variant="body2" sx={{
                                        lineHeight: '1.5',
                                        fontSize: '16px',
                                        margin: '10px 0'
                                    }}>
                                        {card.description2}
                                        <br/>
                                        {card.example2}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default OutlinedCardsRow;










