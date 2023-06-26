import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() === "") {
      alert("Agrega un nombre a la tarea");
      return;
    }
    addTask(taskName);
    setTaskName("");
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Agregar tarea..."
        value={taskName}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Agregar</button>
    </div>
  );
};

export default AddTask;
