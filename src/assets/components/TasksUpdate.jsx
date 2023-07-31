import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const TasksUpdate = ({ tasks, handleUpdateTasks }) => {
	const { updateDescription, onInputChange, updateDescrip } = useForm({
		updateDescription: tasks.description, updateDescrip: tasks.descrip
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = tasks.id;
		const description = updateDescription;
		const descrip = updateDescrip;

		handleUpdateTasks(id, description, descrip);

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



			<input type="text"
			className={`input-update-d ${
				tasks.done ? 'text-decoration-dashed' : ''
			}`}
			name='updateDescrip'
			value={updateDescrip}
			onChange={onInputChange}
			placeholder='Escribe una breve descripcion de la tarea'
			readOnly={disabled}
			ref={focusInputRef} />



			<button className='btn-edit' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};