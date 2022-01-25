import ACTION_TYPES from "../actions/actionTypes"


const initialState = {
  tasks: [
    {
      id: 0,
      text: 'text'
    }
  ]
}


function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK: {
      const { tasks } = state;
      const { payload } = action;

      const newTask = [...tasks, { text: payload, id: Date.now() }]
      return {
        ...state,
        tasks: newTask
      }
    }


    case ACTION_TYPES.DELETE_TASK: {
      const { tasks } = state;
      const { id } = action;

      const newTasks = tasks.filter((task) => task.id !== id);

      return {
        ...state,
        tasks: newTasks
      }
    }
    case ACTION_TYPES.UPDATE_TASK: {

      const { tasks } = state;
      const { id, payload } = action;

      const newTasks = tasks.map(task => {
        if (task.id === id) {
          return { ...task, text: payload }
        }
        return task
      })

      return {
        ...state,
        tasks: newTasks
      }
    }

    default:
      return state
  }

}

export default tasksReducer;