import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { HomeContainer } from './styles';


const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        textAlign: 'center',
        flexGrow: 1,
        padding: 10,
        marginTop: '1rem',
        width: '600px',
    },
    title: {
        flexGrow: 1,
        padding: 10,
        marginTop: '1rem',
    },
    words: {
        color: '#505050',
    },
    image: {
        padding: '0.5rem',
        marginTop: '80%',
    },
    buttonservicos: {
        display: "flex",
        marginTop: '2rem',
        margin: 'auto',
        width: '30%',
        border: ".5px solid",
    },
    engrenagem: {
        width: '10px',
        height: '10px',
    }
}));

export default function HomePage(props) {

    const classes = useStyles();

    return (
        <HomeContainer className={classes.root}>
            <div>
                <div className={classes.title}>
                    <Typography className={classes.words} variant='h4'>Conectando quem precisa com quem sabe</Typography>
                </div>
                <div className={classes.content}>
                    <Typography className={classes.words} variant='paragraph'>
                        A <bold>Labeninjas</bold> é a maior plataforma de contratação de
                        serviços do Brasil. Conectamos profissionais de todo o país com
                        pessoas solicitando serviços, atendendo com qualidade, facilidade
                        e rapidez.
                    </Typography>
                </div>
                <div>
                    <Button className={classes.buttonservicos} color="secondary" variant="contained" onClick={() => props.changePage('sellPage')}>Confira os serviços ofertados</Button>
                </div>
            </div>
            <aside className='image'>
                <img src='./images/dev.png' alt='homem de pé segurando notebook' />
            </aside>
        </HomeContainer>
    );
}

