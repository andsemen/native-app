import { combineReducers } from "redux";
import tasksReduser from './tasksReducer'
import weatherReducer from "./weatherReduser";


const rootReducer = combineReducers({
  tasks: tasksReduser,
  weather: weatherReducer
})


export default rootReducer