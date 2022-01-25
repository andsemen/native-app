import axios from "axios";

const httpClient = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5`
})


export const getWeather = async (city) => {
  return await httpClient.get(`/weather?q=${city}&appid=19ac47b88d8c24af1610953bdb28cf9b`)
}

export const getHourlyWeatherReport = async (lat, lon) => {
  return await httpClient.get(`onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=19ac47b88d8c24af1610953bdb28cf9b`)
}