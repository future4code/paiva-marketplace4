import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

    content: {
        flexGrow: 1,
        marginLeft: 30,
        marginTop: 40,
    },
    title: {
        flexGrow: 1,
        marginLeft: 40,
        marginTop: -650,
    },
    fullWidth: {
        width: '100%',
    },
}));

function MainContent() {
    const classes = useStyles();

    return (
        <main className={classes.fullWidth}>
            <div className={classes.title}>
                <Typography variant='h4'>Conectando quem precisa<br /> com quem sabe</Typography>
            </div>
            <div className={classes.content}>
                <Typography paragraph>
                    <bold>Labeninjas</bold> é a maior plataforma de contratação de
                     serviços do Brasil.<br /> Conectamos profissionais de todo o país com
                     pessoas solicitando serviços,<br /> atendendo com qualidade, facilidade
                     e rapidez.
                </Typography>
            </div>
        </main>
    );
}

export default MainContent;
