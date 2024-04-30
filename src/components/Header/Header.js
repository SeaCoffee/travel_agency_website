import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Box, CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, useTheme, useMediaQuery, List, ListItem, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';

import Divider from '@mui/material/Divider';

import ListItemButton from '@mui/material/ListItemButton';

import MenuIcon from '@mui/icons-material/Menu';






import './Header.css'


const navItems = [
    { title: 'На головну', path: '/' },
    { title: 'Наші послуги', path: '/services' },
    { title: 'Корисне', path: '/useful' },
    { title: 'Популярні напрямки', path: '/resorts' }
];

const menuItemStyle = {
    color: '#fff',
    fontSize: '1.1rem',
    textShadow: '0px 0px 5px rgba(0,0,0,0.5)',
    '&:hover': {
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
    },
    textAlign: 'center'  // Добавляем выравнивание текста для мобильного меню
};


function DrawerAppBar(props) {
    const { window } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClose = () => {
        setMobileOpen(false);
    };

    const drawer = (
        <Box onClick={handleClose} sx={{ textAlign: 'center', backgroundColor: '#8DCBE6', height: '100%' }}>
            <Divider />
            <List>
                {navItems.map((item) => {
                    if (item.path === '/' && location.pathname === '/') return null;
                    return (
                        <ListItem key={item.title} disablePadding>
                            <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                                <ListItemButton sx={menuItemStyle}>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

    const container = window !== undefined ? window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                height: '65px',
                zIndex: 1000,
                backgroundColor: '#8DCBE6',
                marginBottom: '20px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)'
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: isMobile ? 'block' : 'none' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Літо 365
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => {
                            if (item.path === '/' && location.pathname === '/') return null;
                            return (
                                <Button key={item.title} sx={menuItemStyle}>
                                    <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {item.title}
                                    </Link>
                                </Button>
                            );
                        })}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'box-border', width: '240px', backgroundColor: '#8DCBE6', color: '#fff' }
                }}
            >
                {drawer}
            </Drawer>
            <Box component="main" sx={{ p: 0.3, width: '100%', mt: 0 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}
export default DrawerAppBar;

