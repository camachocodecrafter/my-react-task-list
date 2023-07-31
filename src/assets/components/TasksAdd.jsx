import React from 'react';
import { useForm } from '../hooks/useForm';

export const TasksAdd = ({ handleNewTasks }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTasks = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTasks(newTasks);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='¿Qué pendiente tienes?'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};