export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export interface IState {
  todoList: ITodo[];
}

export interface IAction {
  type: ActionType;
  payload: ITodo | number;
}
export enum ActionType {
  ADD_ITEM = 'addItem',
  TOGGLE_ITEM = 'toggleItem',
  DELETE_ITEM = 'deleteItem'
}

export interface RGBColorType {
  red: number;
  green: number;
  blue: number;
}
