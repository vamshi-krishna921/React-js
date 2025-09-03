import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

export const ADD_TASK = "task/add";
export const REMOVE_TASK = "task/remove";
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

export const store = createStore(taskReducer, composeWithDevTools());
