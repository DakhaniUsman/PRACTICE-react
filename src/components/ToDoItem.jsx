import React, { useState } from "react";
import "./ToDoItem.css"
import { useTodos } from "./context/TodoContext";

const TodoItem = ({ todo }) => {
  const { updateTodo, deleteTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (newText.trim()) {
      updateTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <div className="list-item">
          <input
            type="text"
            className="list-item-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <div className="list-item-btns">
            <button onClick={handleUpdate}>✅</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </div>
        </div>
      ) : (
        <div className="list-item">
          <span>{todo.text}</span>
          <div className="list-item-btns">
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </div>

        </div>
      )}
    </div>
  );
};

export default TodoItem;
