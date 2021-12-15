import { FetchToDoAction, DeleteToDoAction } from "./todos";
export enum ActionTypes {
  fetchTodo,
  deleteTodo,
}

export type Action = FetchToDoAction | DeleteToDoAction;
