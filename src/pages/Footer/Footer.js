import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {

    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: '1',
    },
    footer: {
        marginLeft: 40,
        marginBottom: 20,
        fontSize: 17,
    },
}));

function Footer() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Typography variant='ol' className={classes.footer}>
                    <p>Principais serviços:</p>
                    <li>Informações</li>
                    <li>Informações</li>
                    <li>Informações</li>
                </Typography>
            </AppBar>
        </div>
    );
}

export default Footer;