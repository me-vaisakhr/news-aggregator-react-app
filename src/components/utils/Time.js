import React from 'react'
import { Typography } from "@material-ui/core"
import makeStyles from '@material-ui/core/styles/makeStyles';
const useStyles = makeStyles((theme) => ({
    time:{
        color:theme.palette.primary.main,
        fontSize:'12px',
    }
}));

/**
 * Time - is the component for showing the time in the header 
 */
const Time = () => {
    const classes = useStyles();
    const [time, setTime] = React.useState(''+new Date().toDateString() + ' ' +new Date().toLocaleTimeString())
    
    /**
     * setTimer - handler for the dynamic time change. 
    */
    const setTimer = () => {
        setTime(''+new Date().toDateString() + ', ' +new Date().toLocaleTimeString())
    }
    React.useEffect(()=>{
        const timer = setInterval(setTimer,1000)
        return ()=>{clearInterval(timer)}
    },[])
    return (
        <Typography className={classes.time} variant="caption">
            {time}
        </Typography>
    )
}

export default Time