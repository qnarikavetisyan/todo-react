import React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from "./TodoItem";

export const TodoList = ({ onDelete, onChangeChecked }) => {
  const todos = useSelector(store => store.TodoReducer);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onChangeChecked={onChangeChecked}
        />
      ))}
    </div>
  );
};
