import { createStore } from "redux";

const ADD_TASK = "task/add";
const REMOVE_TASK = "task/remove";
const initialState = {
  tasks: [],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((curTask, index) => index !== action.payload),
      };
    default:
        return state;
  }
};

export const store = createStore(taskReducer);
store.dispatch({ type: ADD_TASK, payload : "Learn Redux" });
store.dispatch({ type: ADD_TASK, payload : "Learn RTK" });
console.log(store.getState());

// store.dispatch({ type: REMOVE_TASK, payload : 1 });
// console.log(store.getState());