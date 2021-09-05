import { Backdrop, CircularProgress } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
const useStyles = makeStyles((theme) => ({
    backdrop:{
        zIndex: theme.zIndex.drawer + 1,
    }
}));

/**
 * Loader - is the component responsible for the showing the loader 
 * @param open - status to decide either to show / hide the loader
 * @returns 
 */
const Loader = ({open}) => {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={open}>
            <CircularProgress color="primary" />
        </Backdrop>
    )
}

export default Loader