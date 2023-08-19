import React, { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const addTask = (): void => {
    if (todo.trim() === "") return; // Don't add empty tasks
    setTasks([...tasks, todo]);
    setTodo(""); // Clear the input field
  };

  const handleDelete = (index: number): void => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h3>Todo App</h3>
      <div className="content">
        <div className="inputDiv">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Add task"
            value={todo}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>ADD</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <span className="delete" onClick={() => handleDelete(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
