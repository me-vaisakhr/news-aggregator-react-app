import { Typography } from "@material-ui/core"
import makeStyles from '@material-ui/core/styles/makeStyles';
const useStyles = makeStyles((theme) => ({
    logo:{
        color:theme.palette.primary.main,
        fontSize:'1rem',
        fontWeight:300,
        textAlign:'right',
        padding: '10px 0'
    }
}));
const WeatherInfo = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.logo} variant="h1">
            26°c at Kochi
        </Typography>
    )
}

export default WeatherInfo