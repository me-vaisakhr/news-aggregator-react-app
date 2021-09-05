import { ApiClient } from "./apiClient";

let client = new ApiClient(process.env.REACT_APP_WEATHER_API);

export default {
  /**
   * getCurrentWeather is the endpoint for get current weather details.
   * @param data will have 3 things.
   * 1. latitude - latitude of the user
   * 2. longitude - longitude of the user
   */
  getCurrentWeather(data) {
    const {latitude, longitude} = data
    let qp = '' 
    if(latitude){
      qp+=`&lat=${latitude}`
    }
    if(longitude){
      qp+=`&lon=${longitude}`
    }
    return client.get(`/weather?units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}${qp}`);
  },
};
