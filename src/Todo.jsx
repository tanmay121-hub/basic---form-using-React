import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState({ message: "", done: false });
  const addTask = () => {
    setTasks([...tasks, { Text: task, isDone: false }]);
    setTask("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>To Do App</h2>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <div className="list">
        <table>
          <thead>
            <th>Task</th>
            <th>Done</th>
          </thead>
          <tbody>
            {tasks.map((t, i) => (
              <tr>
                <td>{Text.message}</td>;
                <td>
                  <button onClick={() => markDone(i)}>{t.done}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={addTask}>+Add</button>
    </div>
  );
};

export default Todo;
