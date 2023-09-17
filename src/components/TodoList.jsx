import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todo, toggleTodoComplete, removeTodo}) => {
	return (
		<ul className='todoList'>
			{
				todo.map(task => <TodoItem
					key={task.id}
					toggleTodoComplete={toggleTodoComplete}
					removeTodo={removeTodo}
					{...task}/>)
					
			}
		</ul>
	);
};

export default TodoList;