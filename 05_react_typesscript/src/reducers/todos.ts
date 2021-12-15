import { Todo, ActionTypes, Action } from "../actions";

export const todosReducer = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case ActionTypes.fetchTodo:
      return action.payload;
    case ActionTypes.deleteTodo:
      const filterTods: Todo[] = state.filter(
        (todo: Todo) => todo.id !== action.payload
      );
      return filterTods;
    default:
      return state;
  }
  //  return state
};
