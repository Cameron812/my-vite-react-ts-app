type ITodo = {
  id: number;
  content: string;
  completed: boolean;
};

type IState = {
  todoList: ITodo[];
};
type ActionType =
  | {
      type: 'add';
      payload: ITodo;
    }
  | {
      type: 'delete';
      payload: number;
    };
