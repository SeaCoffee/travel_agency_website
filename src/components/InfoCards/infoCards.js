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
        example: 'Страхування',
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
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const cardCount = cardData.length;

    return (
        <div style={{
            width: isMobile ? '100%' : '100%',  // 95% ширины на планшетах и десктопах
            padding: isMobile ? '0' : '0 2.5%',  // По 2.5% отступа с каждой стороны, чтобы центрировать и предотвратить прилипание к краям
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                flexWrap: isTablet ? 'wrap' : 'nowrap',
                alignItems: isMobile ? 'center' : 'stretch',
                justifyContent: 'center',
                width: '100%',
            }}>
                {cardData.map((card, index) => (
                    (!isMobile || index === 0) && (
                        <div key={index} style={{
                            width: isMobile ? 'calc(100% - 20px)' : isTablet ? '50%' : '25%',
                            padding: isMobile ? '10px' : '6px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Card variant="outlined" elevation={4} style={{
                                backgroundColor: '#fffaf6',
                                boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                height: '100%',
                                width: '100%',  // Убедимся, что карточка растягивается на всю доступную ширину
                            }}>
                                <CardContent style={{ flexGrow: 1 }}>
                                    <Typography color="text.secondary" gutterBottom variant={isMobile ? "subtitle1" : "body1"}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant={isMobile ? "h6" : "h5"} component="div">
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
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}




export default OutlinedCardsRow;






