import './App.css';
import * as React from 'react';
import {
    BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom";
import Footer from "./components/Footer";
import {ThemeProvider} from "@material-ui/styles";
import {Button, CssBaseline, ListItemIcon} from "@material-ui/core";
import FirstPage from "./components/FirstPage";
import BookInfo from "./components/books/BookInfo";
import BookEdit from "./components/books/BookEdit";
import Books from "./components/books/Books";
import AuthorEdit from "./components/authors/AuthorEdit";
import AuthorInfo from "./components/authors/AuthorInfo";
import Authors from "./components/authors/Authors";




const drawerWidth = 240;


const MainStyle = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <ThemeProvider theme={theme}>
            <Router>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Menu
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem >
                                <Button component={Link} to="/">
                                    <ListItemText primary={"FIRST PAGE"}/>
                                </Button>
                        </ListItem>
                        <ListItem>
                        <Button component={Link} to="/books">
                                <ListItemText primary={"BOOKS"}/>
                        </Button>
                        </ListItem>
                        <ListItem>
                        <Button component={Link} to="/authors">
                                <ListItemText primary={"AUTHORS"}/>
                        </Button>
                        </ListItem>
                    </List>
                </Drawer>
                <MainStyle open={open}>
                    <Switch>
                        <Route exact path="/">
                            <FirstPage/>
                        </Route>
                        <Route path="/books/info/:id">
                            <BookInfo/>
                        </Route>
                        <Route path="/books/edit/:id">
                            <BookEdit/>
                        </Route>
                        <Route path="/books/add">
                            <BookEdit/>
                        </Route>
                        <Route path="/books">
                            <Books/>
                        </Route>
                        <Route path="/authors/edit/:id">
                            <AuthorEdit/>
                        </Route>
                        <Route path="/authors/info/:id">
                            <AuthorInfo/>
                        </Route>
                        <Route path="/authors/add">
                            <AuthorEdit/>
                        </Route>
                        <Route path="/authors">
                            <Authors/>
                        </Route>
                    </Switch>
                    <Footer/>
                </MainStyle>
            </Router>
            </ThemeProvider>
        </Box>
    );
}
