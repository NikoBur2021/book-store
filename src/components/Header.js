import React from "react";
import {Link} from "react-router-dom";
import useStyles from "../styles";
import {AppBar, Button, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


function Header() {
    const classes = useStyles()
    return (
        <div className="App">
            <div className={classes.rootT}>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container spacing={1}>
                            <AppBar position="fixed">
                                <Toolbar>
                                    <Grid container spacing={1}>
                                        <Grid item xs={1}>
                                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                                <MenuIcon/>
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={4} className={classes.mR50} >
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Button className={classes.sixPix} component={Link} to="/" color="secondary" variant="outlined">1 PAGE</Button>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Button className={classes.sixPix}  component={Link} to="/books" color="secondary" variant="outlined">BOOKS</Button>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Button className={classes.sixPix}  component={Link} to="/authors" color="secondary" variant="outlined">AUTHOR</Button>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Button className={`${classes.sixPix} ${classes.mL}`} color="inherit">Login</Button>
                                        </Grid>
                                    </Grid>
                                </Toolbar>
                            </AppBar>
                            <Button color="inherit">Login</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
            <pre>THIS IS HEADER</pre>
            <Link to="/">
                <button>FIRST PAGE</button>
            </Link>
            <Link to="/books">
                <button>BOOKS</button>
            </Link>
            <Link to="/authors">
                <button>AUTHOR</button>
            </Link>
        </div>
    );
}

export default Header;