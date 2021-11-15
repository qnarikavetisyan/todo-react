import React from "react";

export const TodoItem = ({ todo, onDelete, onChangeChecked }) => {
  function deleteItem() {
    onDelete(todo);
  }
  return (
    <div className="todo-item">
      <label>
        <input
          type="checkbox"
          className="checkbox"
          checked={todo.isCompleted}
          onChange={(e) => {
            onChangeChecked({ ...todo, isCompleted: e.target.checked });
          }}
        />
        {todo.title}
      </label>
      <button className="delete-button" onClick={deleteItem}>
        x
      </button>
    </div>
  );
};
