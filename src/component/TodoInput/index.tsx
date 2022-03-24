import React, { useRef } from 'react';

import { ITodo } from '../../typings/index';
interface IProps {
  todoList: ITodo[];
  handleAdd: (todo: ITodo) => void;
}
export default function TodoInput({ handleAdd, todoList }: IProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const addItem = () => {
    const input = inputRef.current!.value.trim();
    const isExisted = todoList.find((todo) => todo.content === input);
    if (isExisted) {
      return alert('duplicate todo item');
    }
    if (input.length) {
      handleAdd({
        id: new Date().getTime(),
        content: input,
        completed: false,
      });
      inputRef.current!.value = '';
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="please enter task" />
      <button type="button" onClick={addItem}>
        Add
      </button>
    </div>
  );
}
