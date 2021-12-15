import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface FetchToDoAction {
  type: ActionTypes.fetchTodo;
  payload: Todo[];
}

export interface DeleteToDoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}
const url = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>(url);
    dispatch<FetchToDoAction>({
      type: ActionTypes.fetchTodo,
      payload: res.data,
    });
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
