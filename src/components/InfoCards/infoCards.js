import React from 'react';

import { Grid, Card, CardContent, Typography, useTheme, useMediaQuery } from '@mui/material';

import './infoCards.css'

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
        <Grid container spacing={2} sx={{justifyContent: 'space-around', paddingLeft: '16px', paddingRight: '16px'}}>
            {cardData.map((card, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}
                      sx={{
                          maxWidth: isMobile ? '100%' : '300px',
                          width: '100%',
                      }}>
                    <Card variant="outlined" elevation={4} sx={{
                        bgcolor: '#fffaf6',
                        minHeight: 200,
                        boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                        width: '100%'
                    }}>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                                {card.title}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {card.word}
                            </Typography>
                            <Typography variant="body2">
                                {card.description}
                                <br/>
                                {card.example}
                            </Typography>
                            {card.description2 && card.example2 && (
                                <Typography variant="body2">
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
    );

}


    export default OutlinedCardsRow;





