import { put } from 'redux-saga/effects';
import { getWeatherSuccess, getWeatherError } from './../actions/getWeatherCreator'

import * as API from './../../api';

export function* getWeatherSaga(action) {
  try {
    const response = yield API.getWeather(action.city);
    const { data: { main: { temp } }, data: { name }, data: { coord } } = response


    const response2 = yield API.getHourlyWeatherReport(coord.lat, coord.lon)

    const { data: { hourly, daily } } = response2
    yield put(getWeatherSuccess({ temp, name, daily, hourly }))

  } catch (error) {
    console.log(error)
    yield put(getWeatherError(error))
  }
}