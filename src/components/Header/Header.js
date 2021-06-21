import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: '20vh'
    },
    appBar: {
        boxShadow: 'none',
    },
    grow: {
        flexGrow: '1',
    },
    logo: {
        margin: '12px',
        height: '70px',
    },
    button: {
        paddingRight: theme.spacing(5),
    },
    brand: {
        width: 80,
        height: 40,
        transform: 'rotate(-90deg)',
        padding: "0.1rem",
    },
    logoimage: {
        height: '70px',
        padding: '0.1rem',
    }

}));

export default function Header(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton onClick={() => props.changePage("homePage")} edge="start" className={classes.logo} color="secondary" aria-label="menu">
                        <img className={classes.brand} src='./images/labeninjas.png' alt='marca' />
                        <img className={classes.logoimage} src="/images/labelogo.png" alt="logo" />
                    </IconButton>
                    <div className={classes.grow} />
                    <Button className={classes.button} color="secondary" onClick={() => props.changePage("registerPage")} >Cadastro</Button>
                    <Button className={classes.button} color="secondary" onClick={() => props.changePage("sellPage")}>Serviços</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

