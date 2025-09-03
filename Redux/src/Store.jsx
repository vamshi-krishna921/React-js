import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {thunk} from 'redux-thunk';
import axios from "axios";

export const ADD_TASK = "task/add";
export const REMOVE_TASK = "task/remove";
export const FETCH_TASKS = "task/fetch";
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
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case FETCH_TASKS:
      return { ...state, tasks: [...state.tasks, ...action.payload] };

    default:
      return state;
  }
};

export const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const tasks = response.data;
      dispatch({ type: FETCH_TASKS, payload: tasks.map((task) => task.title) });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
};
