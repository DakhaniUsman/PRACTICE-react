import AddTodo from "./AddToDo";
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./ToDoList";
import "./ToDoApp.css";

const ToDoApp = () => {
    return (
        <div className="to-do-body">
            <div className="to-do-container" style={{ padding: "20px" }}>
                <h1>To-Do List</h1>
                <AddTodo />
                <TodoList />
            </div>
        </div>
    );
}
export default ToDoApp;