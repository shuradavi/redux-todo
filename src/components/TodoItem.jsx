import React from 'react';
import { useDispatch } from 'react-redux';
import {removeTodo, toggleTodoComplete} from '../store/todoSlice'

const TodoItem = ({ id, text, completed }) => {
	const dispath = useDispatch();
	const removeTask = () => dispath(removeTodo(id))
	const toggleTaskComplete = () => dispath(toggleTodoComplete(id))
	return (
		<li>
			<input
				type='checkbox'
				checked={completed}
				onChange={toggleTaskComplete}
			/>
			<span>{text}</span>
			<span className='deleteTask' onClick={removeTask}>&times;</span>
		</li>
	);
};

export default TodoItem;