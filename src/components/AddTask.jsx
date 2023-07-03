import React, { useState } from "react";
import "../App.css";

function AddTask({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      onAddTask(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskName}
        onChange={handleChange}
      />
      <button className="add-button" onClick={handleAddTask}>
        AGREGAR *
      </button>
    </div>
  );
}

export default AddTask;
