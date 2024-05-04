import React from "react";
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import './aboutServices.css'
import BackButton from "../BackButton/BackButton";

export const AboutServicesPage = () => {
    return (
        <Box className="box">
            <Typography variant="h4" gutterBottom className="title" >
                Наші послуги:
            </Typography>
            <Grid container spacing={3}>
                {[
                    { title: "Екскурсійні тури", description: "Подорожуйте найзнаменитішими пам'ятками світу з досвідченими гідами" },
                    { title: 'Пляжний відпочинок', description: 'Насолоджуйтесь сонцем і морем на найкращих пляжах планети. Ідеальне поєднання релаксу та пляжних розваг чекає на вас!' },
                    { title: 'Круїзи', description: 'Відкрийте для себе дивовижний світ круїзів з комфортом та різноманітністю маршрутів' },
                    { title: 'Термальні курорти', description: 'Відпочинок та лікування на кращих термальних курортах. Зцілення для тіла та душі' },
                    { title: 'Пакетні тури', description: 'Досліджуйте світ без турбот із нашими пакетними турами. Все включено - від харчування та транспорту до екскурсій!' },
                    { title: 'Автобусні тури', description: 'На автобусі до пригод та відпочинку! Виберіть екскурсійний маршрут для дослідження чи зручний проїзд до курортів' },
                    { title: 'Бронювання авіаквитків', description: 'Забронюйте найкращі місця на чартерних та регулярних рейсах. Небо ближче, ніж здається!' },
                    { title: 'Страхування за кордоном', description: 'Подорожуйте з впевненістю. Наше страхування захистить вас у будь-якій точці світу' },
                    { title: 'Бронювання готелів', description: 'Знайдіть ідеальні готелі для незабутнього відпочинку. Комфорт та гостинність – наш пріоритет' },
                    { title: 'Бронювання автобусних квитків', description: 'Міжнародні автобусні маршрути. Комфортна подорож до будь-якої точки Європи, Туреччини і не тільки' },
                    { title: 'Візова підтримка', description: 'Отримання візи без турбот. Повне ведення процесу – від консультації до отримання документу' },
                    { title: 'Оренда авто', description: 'Оренда автомобілів по всьому світу. Свобода пересування у будь-якій поїздці' }
                ].map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="card">
                            <CardContent>
                                <Typography variant="h5" component="div" className="cardContent" sx={{ mb: 1 }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" className="bodyText">
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 2 }}> {/* Отступ сверху и выравнивание по левому краю */}
                <BackButton /> {/* Кнопка Назад */}
            </Box>
        </Box>
    );
};

