import React from 'react';
import { useForm } from '../hooks/useForm';

export const TasksAdd = ({ handleNewTasks}) => {
	const { description, descrip, onInputChange, onResetForm } = useForm({
		description: '', descrip:''
	});

	const onFormSubmit = e => {
		e.preventDefault();

         
        if (description.trim().length <= 2) {
            return( alert('La descripcion de la tarea debe tener más de dos caracteres'));
        }      
               
		let newTasks = {
			id: new Date().getTime(),
			description: description,
			descrip: descrip,
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
				placeholder='¿Qué tarea pendiente tienes?'
			/>
		


			<input type="text"
			className='input-add'
			name='descrip'
			value={descrip}
			onChange={onInputChange}
			placeholder='Escribe una breve descripcion' />

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};