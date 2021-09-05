import { Box, IconButton, Typography } from "@material-ui/core"
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from "react";
import { fetchCurrentWeather } from '../../redux/actions/fetchWeatherAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getLoading,
  getWeather,
  getError
} from '../../redux/selectors/fetchWeatherSelector';
import RefreshIcon from '@material-ui/icons/Refresh'
import clsx from "clsx";
import {WEATHER_ICON_PATH} from '../../config/constants'

const useStyles = makeStyles((theme) => ({
    weatherContainer:{
        display: 'inline-flex',
        alignItems: 'center',
    },
    weatherText:{
        color:theme.palette.primary.main,
        fontSize:'1rem',
        fontWeight:300,
        textAlign:'right',
        padding: '10px 0',
        [theme.breakpoints.down("xs")]:{
            fontSize: '12px'
        }
    },
    iconButton:{
        [theme.breakpoints.down("xs")]:{
            padding: '5px',
        }
    },
    icon:{
        transitionDuration: '2s',
        transform: 'rotate(0deg)',
    },
    refreshIcon:{
        animation: `$refreshEffect 1s ${theme.transitions.easing.easeIn} infinite`,
    },
    '@keyframes refreshEffect': {
        '0%': {
            transform: 'rotate(0deg)'
        },
        '100%': {
            transform: 'rotate(360deg)'
        }
    },
}));

/**
 * WeatherInfo - is the component responsible for showing the weather details in the header.
 * @param loading - will be come true on the api calls
 * @param weather - will have the weather details
 * @param error - will have the error message if api throws error
 * @param fetchCurrentWeather - api handler for fetch the weather details.
 * @returns 
 */
const WeatherInfo = ({loading, weather, error, fetchCurrentWeather}) => {
    const classes = useStyles();
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    /**
     * locationFetchSuccess - handler to call the weather api if it possible to fetch the location of user
     * @param location - will have the geo location details of the user.
     */
    const locationFetchSuccess = async (location) =>{
        const latitude = location.coords.latitude
        const longitude = location.coords.longitude
        await fetchCurrentWeather({latitude,longitude})
    }

    /**
     * locationFetchFailed - handler to if it failed to fetch the location of user
     * @param error - error message.
     */
    const locationFetchFailed = (error) =>{
        console.log('Failed => ',error)
    }

    React.useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            locationFetchSuccess,
            locationFetchFailed,
            options
        )
    },[])

    /**
     * handleRefresh - handler to refresh the weather details.
     * @param e - click event details.
     */
    const handleRefresh = (e) => {
        window.navigator.geolocation.getCurrentPosition(
            locationFetchSuccess,
            locationFetchFailed,
            options
        )
    } 
    console.log(loading)
    return (
        <Box component="div" className={classes.weatherContainer}>
            {weather && <img src={`${WEATHER_ICON_PATH}${weather.weather[0]?.icon}.png`} />}
            <Typography className={classes.weatherText} variant="h1">
                {weather ? ` ${Math.ceil(weather.main.temp)}°c at your place`: `No weather data available`}
            </Typography>
            <IconButton className={classes.iconButton} onClick={handleRefresh}>
                <RefreshIcon className={clsx(classes.icon,{[classes.refreshIcon]:loading})} fontSize="small"/>
            </IconButton>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: getLoading,
    weather: getWeather,
    error: getError,
});

function mapDispatchToProps(dispatch) {
    return { 
        fetchCurrentWeather: options => dispatch(fetchCurrentWeather(options)), 
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WeatherInfo);