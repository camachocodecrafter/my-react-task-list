import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Task({ task, onToggleComplete, onRemoveTask }) {
  const handleToggleComplete = () => {
    onToggleComplete(task.id);
  };

  const handleRemoveTask = () => {
    onRemoveTask(task.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.name}
      </span>
      <button className="remove-button" onClick={handleRemoveTask}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
}

export default Task;
