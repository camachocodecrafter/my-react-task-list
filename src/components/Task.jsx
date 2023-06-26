import React from "react";

const Task = ({ task, toggleTask }) => {
  const handleToggle = () => {
    toggleTask(task.id);
  };

  return (
    <div>
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.name}
      </span>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
    </div>
  );
};

export default Task;
