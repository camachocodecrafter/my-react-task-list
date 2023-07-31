export const tasksReducer = (initialState, action) => {
	switch (action.type) {
		case 'Add Tasks':
			return [...initialState, action.payload];

		case 'Delete Tasks':
			return initialState.filter(tasks => tasks.id !== action.payload);

		case 'Complete Tasks':
			return initialState.map(tasks => {
				if (tasks.id === action.payload) {
					return {
						...tasks,
						done: !tasks.done,
					};
				}

				return tasks;
			});

		case 'Update Tasks':
			return initialState.map(tasks => {
				if (tasks.id === action.payload.id) {
					return {
						...tasks,
						description: action.payload.description,
					};
				}

				return tasks;
			});

		default:
			return initialState;
	}
};