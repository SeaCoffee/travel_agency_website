import React from 'react';
import { Link } from 'react-router-dom';


import { Grid, Button, Typography, ThemeProvider, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';




const theme = createTheme({
    palette: {
        primary: {
            main: '#ffca28',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'black',
                    padding: '10px 20px',
                    fontSize: '1rem',
                    width: '100%', // Используйте конкретную ширину, если нужно
                },
            },
        },
    },
});

export const MainMenu = () => {
    return (
        <ThemeProvider theme={theme}>
            {/* Добавление удвоенного нижнего отступа к внешнему Box */}
            <Box p={2} pb={8}> {/* pb={4} задаст нижний отступ в 32px */}
                <Grid container spacing={2} justifyContent="center">
                    {Array.from({ length: 12 }, (_, index) => (
                        <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                            <Box textAlign="center" p={1}>
                                <Typography variant="h6" gutterBottom>
                                    {`Текст над кнопкой ${index + 1}`}
                                </Typography>
                                <Link to={`/link-${index}`} style={{ textDecoration: 'none' }}>
                                    <Button variant="contained" color="primary">
                                        {`Кнопка ${index + 1}`}
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </ThemeProvider>
    );
};