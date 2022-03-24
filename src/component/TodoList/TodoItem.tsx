import React from 'react';
import { ITodo } from '../../typings';
interface IProps {
  todo: ITodo;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}
export default function TodoItem({ todo, handleToggle, handleDelete }: IProps) {
  const { completed, content, id } = todo;
  const toggleItem = () => handleToggle(id);
  const deleteItem = () => handleDelete(id);

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={toggleItem} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
}
