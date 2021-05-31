import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Footer from '../Footer/Footer'
import MainContent from '../MainContainer/MainContainer'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

function HomePage() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MainContent />
            <Footer />
        </div>
    );
}

export default HomePage;