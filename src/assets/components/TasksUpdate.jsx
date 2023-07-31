import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const TasksUpdate = ({ tasks, handleUpdateTasks }) => {
	const { updateDescription, onInputChange } = useForm({
		updateDescription: tasks.description,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = tasks.id;
		const description = updateDescription;

		handleUpdateTasks(id, description);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<input
				type='text'
				className={`input-update ${
					tasks.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='¿Qué pendiente tienes?'
				readOnly={disabled}
				ref={focusInputRef}
			/>

			<button className='btn-edit' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};