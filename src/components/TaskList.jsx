import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <div>
      <h4>TAREAS</h4>
      <h6>*Marca las tareas completadas*</h6>
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </div>
  );
};

export default TaskList;
