import ACTION_TYPES from "./actionTypes"


export const createTask = (payload) => {
  return {
    type: ACTION_TYPES.CREATE_TASK,
    payload
  }
}


export const deleteTask = (id) => {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    id
  }
}


export const updateTask = (id, payload) => {
  return {
    type: ACTION_TYPES.UPDATE_TASK,
    id,
    payload
  }
}