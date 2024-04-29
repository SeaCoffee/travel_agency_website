import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Button, Typography, ThemeProvider, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';



export const theme = createTheme({
    palette: {
        primary: {
            main: '#ffca28',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    borderRadius: '7px',
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                    width: '85%',
                },
            },
        },
    },
});

const menuItems = [
    { label: "Туреччина, Болгарія", path: "/search-bulgaria-turkey" },
    { label: "Єгипет, Туніс, ОАЕ", path: "/placeholder" },
    { label: "Текст 3", path: "/placeholder" },
    { label: "Текст 4", path: "/placeholder" },
    { label: "Текст 5", path: "/placeholder" },
    { label: "Текст 6", path: "/placeholder" },
    { label: "Текст 7", path: "/placeholder" },
    { label: "Текст 8", path: "/placeholder" },
    { label: "Текст 9", path: "/placeholder" },
    { label: "Текст 10", path: "/placeholder" },
    { label: "Текст 11", path: "/placeholder" },
    { label: "Автобусні тури", path: "/bus-tours-search" }
];

export const MainMenu = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box style={{ paddingTop: '45px', paddingBottom: '55px'}}>
                <Typography variant="body2" style={{ textAlign: 'center', margin: '20px', fontSize: '25px', fontWeight: 'bold' }}>
                    Пошук гарячих турів по країнах:
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {menuItems.map((item, index) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                            <Box textAlign="center" p={1}>
                                <Typography variant="h6" gutterBottom>
                                    {item.label}
                                </Typography>
                                <Button variant="contained" color="primary" component={Link} to={item.path}>
                                    Пошук
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </ThemeProvider>
    );
};