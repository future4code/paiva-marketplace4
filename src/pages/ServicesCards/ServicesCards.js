import React from 'react';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import Filter from '../Filter/Filter';


export default function ServicesCards(props) {

    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardMedia className={classes.media} title={props.name}>
                <img className={classes.imagem} src="https://pmr.site.contabilit.com.br/wp-content/uploads/sites/198/2017/08/servicos.jpg" alt="imagem" />
            </CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h6' gutterBottom color='secondary' justify='center' className={classes.text}>
                        {props.title}
                    </Typography>
                    <Typography variant='h7' color='secondary' justify='center' className={classes.text}>
                        R${props.price},00
                    </Typography>
                    <Typography variant='body5' color='textSecondary' justify='center' fonteSize='30' className={classes.text}>
                        {props.description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardAction} >
                <Button aria-label="Contratar" color='secondary' className={classes.button}>CONTRATAR</Button>
            </CardActions>
        </Card>

    );
}

