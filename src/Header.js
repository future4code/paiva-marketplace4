import React from 'react'
import { makeStyles, AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


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
        padding: '20px',
        height: '100px',
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
                    <IconButton edge="start" className={classes.logo} color="secondary" aria-label="menu">
                        <img className={classes.logo} src="/imagens/labelogo.png" alt="logo" />
                    </IconButton>
                    <div className={classes.grow} />
                    <Button className={classes.button} color="secondary" onClick={() => props.changePage("sellPage")} >Cadastrar Serviço</Button>
                    <Button className={classes.button} startIcon={<AccountCircle />} color="secondary" onClick={() => props.changePage("initialPage")}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;