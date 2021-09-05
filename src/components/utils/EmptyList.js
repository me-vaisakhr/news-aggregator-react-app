import { Container, Typography, Icon } from "@material-ui/core"
import makeStyles from '@material-ui/core/styles/makeStyles';
import EmptyIcon from '@material-ui/icons/SpeakerNotesOff';
const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'50vh'
    },
    icon:{
        transform:'scale(3)',
        color:theme.palette.secondary.main
    },
    text:{
        marginTop:theme.spacing(5),
        color:theme.palette.secondary.main
    }
}));

/**
 * EmptyList - is the component responsible for the showing the empty message if api return an empty list
 * @returns 
 */
const EmptyList = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Icon className={classes.icon}>
                <EmptyIcon/>
            </Icon>
            <Typography className={classes.text} variant="body1">Sorry! We are getting empty results now.</Typography>
        </Container>
    )
}

export default EmptyList