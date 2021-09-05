import { Typography } from "@material-ui/core"
import makeStyles from '@material-ui/core/styles/makeStyles';
import {APP_NAME} from '../../config/constants'
const useStyles = makeStyles((theme) => ({
    logo:{
        color:theme.palette.primary.main,
        fontSize:'3rem',
        fontWeight:700,
    }
}));

/**
 * Logo - is the component for the application logo
 */
const Logo = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.logo} variant="h1">
            {APP_NAME}
        </Typography>
    )
}

export default Logo