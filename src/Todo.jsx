import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, { text: task, isDone: false }]);
      setTask("");
    }
  };

  const markDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>To Do App</h2>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>+Add</button>

      <div className="list" style={{ marginTop: "20px" }}>
        <table
          border="1"
          style={{ borderCollapse: "collapse", padding: "5px" }}
        >
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, i) => (
              <tr key={i}>
                <td>{t.text}</td>
                <td>{t.isDone ? "Completed" : "Pending"}</td>
                <td>
                  <button style={{ margin: "1vh" }} onClick={() => markDone(i)}>
                    {t.isDone ? "Undo" : "Mark Done"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
