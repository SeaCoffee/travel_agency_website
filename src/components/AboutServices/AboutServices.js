import React from "react";
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';

export const AboutServicesPage = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Typography variant="h4" gutterBottom sx={{ marginBottom: 3, ml: 1 }}>
                Наші послуги:
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ bgcolor: '#fffaf6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Екскурсійні тури
                            </Typography>
                            <Typography variant="body2">
                                Подорожуйте найзнаменитішими пам'ятками світу з досвідченими гідами
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Пляжний відпочинок
                            </Typography>
                            <Typography variant="body2">
                                Насолоджуйтесь сонцем і морем на найкращих пляжах планети. Ідеальне поєднання релаксу та пляжних розваг чекає на вас!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Круїзи
                            </Typography>
                            <Typography variant="body2">
                                Відкрийте для себе дивовижний світ круїзів з комфортом та різноманітністю маршрутів
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Термальні курорти
                            </Typography>
                            <Typography variant="body2">
                                Відпочинок та лікування на кращих термальних курортах. Зцілення для тіла та душі
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Пакетні тури
                            </Typography>
                            <Typography variant="body2">
                                Досліджуйте світ без турбот із нашими пакетними турами. Все включено - від харчування та транспорту до екскурсій!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Автобусні тури
                            </Typography>
                            <Typography variant="body2">
                                На автобусі до пригод та відпочинку! Виберіть екскурсійний маршрут для дослідження чи зручний проїзд до курортів
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Бронювання авіаквитків
                            </Typography>
                            <Typography variant="body2">
                                Забронюйте найкращі місця на чартерних та регулярних рейсах. Небо ближче, ніж здається!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Страхування за кордоном
                            </Typography>
                            <Typography variant="body2">
                                Подорожуйте з впевненістю. Наше страхування захистить вас у будь-якій точці світу
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Бронювання готелів
                            </Typography>
                            <Typography variant="body2">
                                Знайдіть ідеальні готелі для незабутнього відпочинку. Комфорт та гостинність – наш пріоритет
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Бронювання автобусних квитків
                            </Typography>
                            <Typography variant="body2">
                                Міжнародні автобусні маршрути. Комфортна подорож до будь-якої точки Європи, Туреччини і не тільки
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Візова підтримка
                            </Typography>
                            <Typography variant="body2">
                                Отримання візи без турбот. Повне ведення процесу – від консультації до отримання документу
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ backgroundColor: '#FEFBF6' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{ marginBottom: 1.5 }}>
                                Оренда авто
                            </Typography>
                            <Typography variant="body2">
                                Оренда автомобілів по всьому світу. Свобода пересування у будь-якій поїздці
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
