import React from "react";
import { TodoProvider } from "./components/context/ToDoContext";
import TodoList from "./components/ToDoList";
import AddTodo from "./components/AddToDo";
import "../src/App.css"

const App = () => {
  return (
    <TodoProvider>
      <div className="to-do-container" style={{ padding: "20px" }}>
        <h1>To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
