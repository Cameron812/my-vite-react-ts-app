import React, { useReducer } from 'react';
import TodoInput from '../TodoInput';
import TodoItem from './TodoItem';
import todoReducer from '../../reducer';
import { ITodo, ActionType } from '../../typings';

export default function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, { todoList: [] });
  const { todoList } = state;

  const handleAdd = (todo: ITodo) => {
    dispatch({ type: ActionType.ADD_ITEM, payload: todo });
  };
  const handleToggle = (id: number) => {
    dispatch({ type: ActionType.TOGGLE_ITEM, payload: id });
  };
  const handleDelete = (id: number) => {
    dispatch({ type: ActionType.DELETE_ITEM, payload: id });
  };
  return (
    <div>
      <TodoInput todoList={todoList} handleAdd={handleAdd} />
      {todoList &&
        todoList.map((todo: ITodo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          );
        })}
    </div>
  );
}
