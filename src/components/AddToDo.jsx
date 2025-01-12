import React, { useState } from "react";
import "./AddToDo.css"
import { useTodos } from "./context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useTodos();
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add a new task"
        className="input-field"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="input-btn" onClick={handleAdd}>+</button>
    </div>
  );
};

export default AddTodo;
