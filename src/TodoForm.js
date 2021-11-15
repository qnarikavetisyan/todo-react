import React, { useState } from "react";

export const TodoForm = ({ onChange }) => {
  const [value, setValue] = useState("");
  return (
    <input
      className="add-input"
      type="text"
      placeholder="todo..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onChange(value);
          setValue("");
        }
      }}
    />
  );
};
