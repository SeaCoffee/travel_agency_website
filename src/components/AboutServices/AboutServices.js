import React from "react";
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';

export const AboutServicesPage = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Наші послуги
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Екскурсійні тури
                            </Typography>
                            <Typography variant="body2">
                                Подорожуйте по самым знаменитым достопримечательностям мира с нашими гидами.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Пляжный отдых
                            </Typography>
                            <Typography variant="body2">
                                Наслаждайтесь солнцем и морем на лучших пляжах планеты.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Круизы
                            </Typography>
                            <Typography variant="body2">
                                Откройте для себя удивительный мир круизов с комфортом и разнообразием маршрутов.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
