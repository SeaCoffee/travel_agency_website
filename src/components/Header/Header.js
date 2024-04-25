import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Header.css'


const drawerWidth = 240;
const navItems = [
    { title: 'На головну', path: '/' },
    { title: 'Наші послуги', path: '/services' },
    { title: 'Корисне', path: '/useful' },
    { title: 'Популярні напрямки', path: '/resorts' }
];

function DrawerAppBar(props) {
    const { window } = props;
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" style={{
                height: '65px',
                zIndex: '1000',
                backgroundColor: '#8DCBE6',
                marginBottom: '20px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)'
            }}>

                <Toolbar >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Літо 365
                    </Typography>
                    <Box sx={{ display: 'block' }}>
                        {navItems.map((item) => {
                            if (isHomePage && item.title === 'На головну') return null;
                            return (
                                <Button
                                    key={item.title}
                                    sx={{
                                        color: '#fff',
                                        fontSize: '1.1rem',
                                        textShadow: '0px 0px 5px rgba(0,0,0,0.5)',
                                        '&:hover': {
                                            boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
                                        },
                                    }}
                                >
                                    <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {item.title}
                                    </Link>
                                </Button>
                            );
                        })}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="main" sx={{ p: 0.3, width: '100%', mt: 0 }}>
                <Toolbar />
                {isHomePage && (
                    <Box
                        sx={{
                            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                            gap: 2,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                    </Box>
                )}
            </Box>

        </Box>
    );
}



DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;