import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TasksUpdate } from './TasksUpdate';

export const Tasks = ({
	tasks,
	handleUpdateTasks,
	handleDeleteTasks,
	handleCompleteTasks,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTasks(tasks.id)}>
				<label
					className={`container-done ${tasks.done ? 'active' : ''}`}
				></label>
			</span>
			<TasksUpdate tasks={tasks} handleUpdateTasks={handleUpdateTasks} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteTasks(tasks.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};