import { ApiClient } from "./apiClient";

let client = new ApiClient(process.env.REACT_APP_WEATHER_API);

export default {
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
