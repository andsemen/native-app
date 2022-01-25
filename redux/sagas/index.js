import { takeLatest } from "redux-saga/effects"
import ACTION_TYPES from "../actions/actionTypes"
import { getWeatherSaga } from './weatherSaga'


function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_WEATHER_REQUEST, getWeatherSaga)
}


export default rootSaga