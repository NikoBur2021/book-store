import {makeStyles} from "@material-ui/core";
import pic from "./images/20211004_115020.jpg"



const useStyles = makeStyles({
    authorSelect: {
        minWidth: '120px'
    },
    backgroundFirstPage: {
        backgroundImage: `url(${pic})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
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
        padding: '80px 0',
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
    topPad: {
      paddingTop: '0px'
    },

})
export default useStyles;