import React from 'react';
import { makeStyles, AppBar, Typography } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';


const useStyles = makeStyles(theme => ({
    root: {
        maxHeight: 20,
    },
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 'auto',
        bottom: '0',
    },
    grow: {
        flexGrow: '1',
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        padding: '0.5px',
        margin: '10px',
    },
    list: {
        listStyleType: 'none',
    }
}));

export default function Footer() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Typography variant='ol' className={classes.footer} color="secondary">
                    <ul className={classes.list}>
                        <li>Principais serviços:</li>
                        <li>Web Design</li>
                        <li>Decoração</li>
                        <li>Aulas particulares</li>
                    </ul>
                </Typography>
                <Typography variant='ol' className={classes.footer} color="secondary">
                    <ul className={classes.list}>
                        <li>Principais cidades:</li>
                        <li>Sorocaba</li>
                        <li>Belo Horizonte</li>
                        <li>Santa Catarina</li>
                    </ul>
                </Typography>
                <Typography variant='ol' className={classes.footer} color="secondary">
                    <table className={classes.table}>

                        <tr>
                            <th><SocialIcon className={classes.icons} url="https://twitter.com" bgColor="#000000" style={{ height: 25, width: 25 }} /></th>
                            <th><SocialIcon className={classes.icons} url="https://pt-br.facebook.com" bgColor="#000000" style={{ height: 25, width: 25 }} /></th>
                        </tr>
                        <tr>
                            <th><SocialIcon className={classes.icons} url="https://www.instagram.com" bgColor="#000000" style={{ height: 25, width: 25 }} /></th>
                            <th><SocialIcon className={classes.icons} url="https://br.linkedin.com" bgColor="#000000" style={{ height: 25, width: 25 }} /></th>
                        </tr>
                    </table>
                </Typography>
            </AppBar>
        </div >
    );
}


