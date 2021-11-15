import React from 'react';
import { useSelector } from 'react-redux';

export const TodoFooter = ({ onDeleteAll }) => {
  const todos = useSelector(store => store.TodoReducer);
  const size = todos.filter((item) => item.isCompleted).length;

  return (
    <div>
      <h1>
        {size} / {todos.length}
      </h1>
      <button onClick={() => onDeleteAll()}>Remove all</button>
    </div>
  );
};
