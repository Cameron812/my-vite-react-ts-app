import { ITodo, IAction, IState, ActionType } from './typings/index';

export default function todoReducer(state: IState, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case ActionType.ADD_ITEM:
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo],
      };
    case ActionType.DELETE_ITEM:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== (payload as number)
        ),
      };
    case ActionType.TOGGLE_ITEM:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          return todo.id === (payload as number)
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : {
                ...todo,
              };
        }),
      };
    default:
      return state;
  }
}
