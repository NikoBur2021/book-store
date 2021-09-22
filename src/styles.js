import {makeStyles} from "@material-ui/core";



const useStyles = makeStyles({
    authorSelect: {
        minWidth: '120px'
    },
    first: {
        width: '400px',
        height: '200px',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textDecoration: 'underline',
        '&:hover': {
            backgroundColor: 'blue'
        }
    },

    second: {
        backgroundColor: 'gray',
    },
    cardGrid: {
        padding: '80px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardMediaMusic: {
        paddingTop: '100.10%',


    },
    cardContent: {
        flexGrow: 1,
    },

})
export default useStyles;