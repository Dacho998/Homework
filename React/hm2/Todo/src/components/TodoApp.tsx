import { useState } from "react";
import { TodoItem } from "./TodoItem";
import "./TodoApp.css";

export const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, description: "Go on vacation", isDone: false },
    { id: 2, description: "Walk the dog", isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), description: newTodo, isDone: false }]);
    setNewTodo("");
  };

  const finishTodo = (id: number) =>
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: true } : todo));

  return (
    <div className="app-wrapper">
      <div className="todo-container">
        <h2>Todo App</h2>

        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onFinish={finishTodo} />
          ))}
        </ul>

        <div className="todo-input">
          <input
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            placeholder="Add a todo..."
          />
          <button onClick={addTodo}>Create</button>
        </div>
      </div>
    </div>
  );
};
