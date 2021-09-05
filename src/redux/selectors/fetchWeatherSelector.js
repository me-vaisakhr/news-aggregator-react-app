import { createSelector } from "reselect";

const fetchWeatherSelector = state => state.fetchWeatherReducer;

const getLoading = createSelector(
  [fetchWeatherSelector],
  fetchNewsSelectorState => fetchNewsSelectorState.isLoading
);

const getWeather = createSelector(
  [fetchWeatherSelector],
  fetchNewsSelectorState => fetchNewsSelectorState.weather
);

const getError = createSelector(
  [fetchWeatherSelector],
  fetchNewsSelectorState => fetchNewsSelectorState.error
);

export { getLoading, getWeather, getError };
