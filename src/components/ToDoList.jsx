import React from "react";
import { useTodos } from "./context/TodoContext";
import TodoItem from "./ToDoItem";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>No to-dos. Add some tasks!</p>
      )}
    </div>
  );
};

export default TodoList;