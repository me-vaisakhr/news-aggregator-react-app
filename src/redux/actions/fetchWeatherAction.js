import { toast } from "react-toastify";
import {
  FETCH_WEATHER_LOADING,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from "../actionTypes/fetchWeatherActionTypes";

import weatherClient from "../../api/weatherClient";
export const fetchCurrentWeather = (options) => {
  return async dispatch => {
    dispatch(fetchWeatherLoading(true));

    try {
      const response = await weatherClient.getCurrentWeather(options); 
      dispatch(fetchWeatherSuccess(response.data));
      
    } catch (err) {
      dispatch(fetchWeatherFailure(err.message));
      toast.error("Fetching news failed!");
    }
    dispatch(fetchWeatherLoading(false));
  };
};

export const fetchWeatherLoading = flag => ({
  type: FETCH_WEATHER_LOADING,
  payload: flag
});

export const fetchWeatherSuccess = weather => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: weather
});

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error
});
