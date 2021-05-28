import React from 'react'
import { makeStyles, AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { theme } from "./theme"


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
    },
    grow: {
        flexGrow: '1',
    },
    logo: {
        margin: '10px',
        height: '70px',
    },
    button: {
        paddingRight: theme.spacing(5),
    }
}));

function Header(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton onClick={() => props.changePage("homePage")} edge="start" className={classes.logo} color="secondary" aria-label="menu">
                        <img className={classes.logo} src="../assets/labelogo.png" alt="logo" />
                    </IconButton>
                    <div className={classes.grow} />
                    <Button className={classes.button} color="secondary" onClick={() => props.changePage("registerPage")} >Cadastrar Serviço</Button>
                    <Button className={classes.button} color="secondary" onClick={() => props.changePage("sellPage")}>Prestador</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;