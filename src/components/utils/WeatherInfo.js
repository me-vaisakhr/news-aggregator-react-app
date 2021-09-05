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
const WeatherInfo = ({loading, weather, error, fetchCurrentWeather}) => {
    const classes = useStyles();
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const locationFetchSuccess = async (location) =>{
        console.log('Success => ',location)
        const latitude = location.coords.latitude
        const longitude = location.coords.longitude
        await fetchCurrentWeather({latitude,longitude})
    }

    const locationFetchFailed = (error) =>{
        console.log('Failed => ',error)
    }

    console.log('Weather => ',weather)

    React.useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            locationFetchSuccess,
            locationFetchFailed,
            options
        )
    },[])

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