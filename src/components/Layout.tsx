



import { Box, InputBase, Paper, Toolbar, Typography } from '@mui/material'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ErrorBoundary from './ErrorBoundary';
import { NavItems, navsItems } from './navItems';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout } from '../redux/slices/authSlice';

interface Props {

    window?: () => Window;
}

const drawerWidth = 240;


export const RouterLayout = (props: Props) => {
    const { pathname } = useLocation();
    const { user } = useAppSelector((state) => state.authReducer)
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" fontWeight={'bold'} sx={{ my: 2 }}>
                FAKE STORE
            </Typography>
            <Divider />
            <Box sx={{ mr: 4 }}
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
            >
                <IconButton sx={{ color: 'black' }} >
                    <Person2OutlinedIcon sx={{ fontSize: 25 }} />
                </IconButton>
                <Box>
                    <Typography fontSize={14} >Hola, {user ? `${user.name.firstname} ${user.name.lastname}` : ''} </Typography>

                </Box>

            </Box>
            <List>
                {navsItems.map((item: NavItems, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={ item.name === 'Cerrar sesión' ? ()=> dispatch(logout()) : () => navigate(item.path)} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ height: 80 }} elevation={0} component="nav">
                <Toolbar
                    sx={{ height: 80 }}
                >
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
                        fontWeight={'bold'}
                        variant="h4"
                        onClick={() => navigate('/inicio')}
                        component="div"
                        sx={{ cursor: 'pointer', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        FAKE STORE
                    </Typography>
                    <Box sx={{ mr: 4, display: { xs: 'none', sm: 'flex' } }}
                        display={'flex'}
                        flexDirection={'row'}
                        alignItems={'center'}
                    >
                        <IconButton sx={{ color: 'white' }} >
                            <Person2OutlinedIcon sx={{ fontSize: 35 }} />
                        </IconButton>
                        <Box>
                            <Typography fontSize={14} >Hola, {user ? `${user.name.firstname} ${user.name.lastname}` : ''} </Typography>

                        </Box>

                    </Box>



                    <Paper

                        component="form"
                        sx={{ height: 37, marginRight: { xs: 0, sm: 15, md: 15 }, p: '2px 4px', display: 'flex', alignItems: 'center', width: { xs: '90%', md: '30%' } }}
                    >

                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar producto"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>

                    </Paper>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navsItems.map((item: NavItems, index) => (
                            <Button onClick={ item.name === 'Cerrar sesión' ? ()=> dispatch(logout()) : () => navigate(item.path)} key={index} sx={{ borderBottom: pathname === item.path ? 1 : 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, textTransform: 'none', color: pathname === item.path ? '#c278b2' : '#FFFFFF' }}>
                                {item.name}
                            </Button>
                        ))}
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
            <Box component={'main'} sx={{ p: 5, bgcolor: '#fafafa;', width: '100%' }}>
                <ErrorBoundary>
                    <Toolbar />
                    <Outlet />
                </ErrorBoundary>

            </Box>
        </Box>
    );
}


