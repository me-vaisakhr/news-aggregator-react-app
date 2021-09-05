import {
  FETCH_WEATHER_LOADING,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from "../actionTypes/fetchWeatherActionTypes";

const initialState = {
  weather: null,
  isLoading: false,
  error: ""
};

const fetchWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload
      };

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default fetchWeatherReducer;
