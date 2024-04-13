import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const drawerWidth = 240;
const navItems = [
    { title: 'На головну', path: '/' },
    { title: 'Наші послуги', path: '/services' },
    { title: 'Корисне', path: '/articles' },
    { title: 'Популярні напрямки', path: '/popular' }
];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Літо 365
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const isHomePage = location.pathname === '/';

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" style={{ height: '65px', zIndex: '1000', backgroundColor: '#8DCBE6' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Літо 365
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3, width: '100%' }}>
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
                    {/* Прямоугольник 1 */}
                    <Box sx={{ width: '300px', height: '200px', bgcolor: '#FEFBF6', borderRadius: '4px', p: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: '25px' }}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                color: '#545454',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: 2,
                                fontSize: '1rem',
                            }}
                        >
                            Вас вітає туристична агенція ЛІТО
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#555',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: 2,
                                fontSize: '0,6rem',
                            }}
                        >
                            Працюємо для Вас з 2017 року
                        </Typography>
                    </Box>
                    {/* Прямоугольник 4 */}
                    <Box sx={{ width: '300px', height: '200px', bgcolor: '#FEFBF6', borderRadius: '4px', p: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: '25px', ml: '20px' }}>                        <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            color: '#555',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            mb: 2,
                            fontSize: '1rem',
                        }}
                    >
                        Пакетні тури з авіа
                    </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#555',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: 2,
                                fontSize: '0,6rem',
                            }}
                        >
                            Автобусні тури<br />
                            Круїзи<br />
                            Авіа/ автобусні квитки<br />
                            Страхування <br />
                            Готелі
                        </Typography>
                    </Box>
                    {/* Прямоугольник 2 */}
                    <Box sx={{ width: '350px', height: '200px', bgcolor: '#FEFBF6', borderRadius: '4px', p: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: '25px', ml: '20px' }}>                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                color: '#555',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: 2,
                                fontSize: '1rem',
                            }}
                        >
                            Ми працюємо з усіма туроператорами України
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#555',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: 2,
                                fontSize: '0,6rem',
                            }}
                        >
                            На період воєнного часу також з туроператорами <br/> Польщі, Молдавії, Румунії
                        </Typography>
                    </Box>
                    {/* Прямоугольник 3 */}
                    <Box sx={{ width: '380px', height: '200px', bgcolor: '#FEFBF6', borderRadius: '4px', p: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', pt: '25px', ml: '20px' }}>                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                color: '#555',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: 2,
                                fontSize: '1rem',
                            }}
                        >
                            Вартість всіх турів — з перших рук
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#555',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: 2,
                                fontSize: '0,6rem',
                            }}
                        >
                            Тут немає абсолютно ніякої націнки, жодних переплат. <br/> Ви купуєте тур саме за тією ціною, яку призначив туроператор
                        </Typography>
                    </Box>

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