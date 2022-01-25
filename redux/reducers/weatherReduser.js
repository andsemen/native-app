import ACTION_TYPES from "../actions/actionTypes";



const initialState = {
  currentTemprature: [],
  tempForWeek: [],
  tempForNextHours: [],
  error: null

}

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_WEATHER_REQUEST: {
      return { ...state }
    }

    case ACTION_TYPES.GET_WEATHER_SUCCES: {
      const { payload } = action
      const newTemp = [{ city: payload.name, temp: Math.ceil(payload.temp - 273) }]

      return {
        ...state,
        currentTemprature: newTemp,
        tempForWeek: [...[...payload.daily]],
        tempForNextHours: [...payload.hourly]
      }
    }

    case ACTION_TYPES.GET_WEATHER_ERROR: {
      const { payload } = action
      return {
        ...state,
        error: payload.error
      }
    }
    default:
      return state;
  }
}

export default weatherReducer