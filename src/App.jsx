import React from 'react';
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
	const initialValueTodo = [];
	const initialValueInput = '';

	const [todo, setTodo] = useState(initialValueTodo);
	const [text, setText] = useState(initialValueInput);

	const addTodo = () => {
		if (text.trim().length) {
			setTodo([
				...todo,
				{
					id: new Date().toISOString(),
					text,
					completed: false,
				}
			])
			setText(initialValueInput);
		}
	};

	const removeTodo = (TodoId) => {
		setTodo(todo.filter(task => task.id !== TodoId))
	}
	const toggleTodoComplete = (todoId) => {
		setTodo(
			todo.map(task => {
				if (task.id !== todoId) return task;
				return {
					...task,
					completed: !task.completed
				}
			})
		)
	}
	return (
		<div className="App">

			<TodoForm text={text} setText={setText} addTodo={addTodo}/>

			<TodoList todo={todo} toggleTodoComplete={toggleTodoComplete} removeTodo={removeTodo}/>
		</div>
  );
}

export default App;
