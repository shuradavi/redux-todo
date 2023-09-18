import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const TodoList = () => {
	const todos = useSelector(state => state.todoStore.todoSlice);

	return (
		<ul className='todoList'>
			{
				todos.map(task => <TodoItem
					key={task.id}
					{...task} />)
			}
		</ul>
	);
};

export default TodoList;