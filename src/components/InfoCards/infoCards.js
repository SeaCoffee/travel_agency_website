import React from 'react';

import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const cardData = [
    {
        title: "Word of the Day",
        word: "benevolent",
        description: "well meaning and kindly.",
        example: '"a benevolent smile"'
    },
    {
        title: "Phrase of the Day",
        word: "serendipity",
        description: "The occurrence of events by chance in a happy or beneficial way.",
        example: '"a fortunate stroke of serendipity"'
    },
    {
        title: "Idiom of the Day",
        word: "Break a leg",
        description: "Good luck (used in the context of performing arts).",
        example: '"break a leg in your performance tonight!"'
    },
    {
        title: "Proverb of the Day",
        word: "A stitch in time",
        description: "A timely effort will prevent more work later.",
        example: '"a stitch in time saves nine"'
    },
    {
        title: "Quote of the Day",
        word: "Carpe diem",
        description: "Seize the day.",
        example: '"Carpe diem, seize the day boys, make your lives extraordinary."'
    }
];

function OutlinedCardsRow() {
    return (
        <Grid container spacing={2}>
            {cardData.map((card, index) => (
                <Grid item xs={12} sm={6} md={2.4} key={index}>
                    <Card variant="outlined" elevation={16} sx={{ bgcolor: '#fffaf6', minHeight: 300 }}> {/* Здесь minHeight для одинакового размера */}
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                                {card.title}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {card.word}
                            </Typography>
                            <Typography variant="body2">
                                {card.description}
                                <br />
                                {card.example}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">LEARN MORE</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default OutlinedCardsRow;


