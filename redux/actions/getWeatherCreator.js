import ACTION_TYPES from "./actionTypes";


export const getWeatherRequest = (city) => {
  return {
    type: ACTION_TYPES.GET_WEATHER_REQUEST,
    city
  }
}

export const getWeatherSuccess = (payload) => {
  return {
    type: ACTION_TYPES.GET_WEATHER_SUCCES,
    payload
  }

}

export const getWeatherError = (error) => {
  return {
    type: ACTION_TYPES.GET_WEATHER_ERROR,
    error
  }
}