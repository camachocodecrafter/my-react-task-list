import { useState } from 'react';
import './App.css';
import { TasksAdd } from './assets/components/TasksAdd';
import { TasksList } from './assets//components/TasksList';
import { useTasks } from './assets/hooks/useTasks';

function App() {
	const {
		tasks,
		tasksCount,
		pendingTasksCount,
		handleNewTasks,
		handleDeleteTasks,
		handleCompleteTasks,
		handleUpdateTasks,
	} = useTasks();

	return (
		<>
			<div className='card-to-do'>
				<h1>Lista de tareas</h1>
				<div className='counter-todos'>
					<h3>
						N° Tareas: <span>{tasksCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTasksCount}</span>
					</h3>
				</div>

				<div className='add-todo'>
					<h3>Agregar Tarea</h3>
					<TasksAdd handleNewTasks={handleNewTasks} />
				</div>

				<TasksList
					tasks={tasks}
					handleUpdateTasks={handleUpdateTasks}
					handleDeleteTasks={handleDeleteTasks}
					handleCompleteTasks={handleCompleteTasks}
				/>
			</div>
		</>
	);
}

export default App;

