import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        minWidth: '200',
        borderRadius: '10px',

    },
    media: {
        height: 0,
        paddingTop: '56,25%', //16:9
        paddingBottom: '5px',

    },
    cardAction: {
        display: 'flex',
        justifyContent: 'flex-end',

    },
    button: {
        marginTop: '5px',
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textJustify: 'center',
        padding: '5px',
        fontSize: '16px',
        marginTop: '10px',
    },
    imagem: {
        margin: '5px',
        height: '80px',
        width: '80px',
    },
}));

