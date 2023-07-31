import { useEffect, useReducer } from 'react';
import { tasksReducer } from '../../TasksReducer';

export const useTasks = () => {
	const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('tasks')) || []
    }

	const [tasks, dispatch] = useReducer(
		tasksReducer,
		initialState,
		init
	);

    const tasksCount = tasks.length
    const pendingTasksCount = tasks.filter(tasks => !tasks.done).length


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


	const handleNewTasks = tasks => {
		const action = {
			type: 'Add Tasks',
			payload: tasks,
		};

		dispatch(action);
	};

	const handleDeleteTasks = id => {
		const action = {
			type: 'Delete Tasks',
			payload: id,
		};

		dispatch(action);
	};

	const handleCompleteTasks = id => {
		const action = {
			type: 'Complete Tasks',
			payload: id,
		};

		dispatch(action);
	};

	const handleUpdateTasks = (id, description) => {
		const action = {
			type: 'Update Tasks',
			payload: {
				id,
				description,
			},
		};

		dispatch(action);
	};

    return{
        tasks,
        tasksCount,
        pendingTasksCount,
        handleNewTasks,
        handleDeleteTasks,
        handleCompleteTasks,
        handleUpdateTasks
    }
};