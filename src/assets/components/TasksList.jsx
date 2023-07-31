import React from 'react';
import { Tasks} from './Tasks';

export const TasksList = ({
	tasks,
	handleUpdateTasks,
	handleDeleteTasks,
	handleCompleteTasks,
}) => {
	return (
		<ul>
			{tasks.map(tasks => (
				<Tasks
					key={tasks.id}
					tasks={tasks}
					handleUpdateTasks={handleUpdateTasks}
					handleDeleteTasks={handleDeleteTasks}
					handleCompleteTasks={handleCompleteTasks}
				/>
			))}
		</ul>
	);
};