import React from 'react';
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useDispatch } from 'react-redux';
import {addTodo} from './store/todoSlice'

function App() {
	const initialValueInput = '';

	const [text, setText] = useState(initialValueInput);
	const dispath = useDispatch();

	const addTask = () => {
		dispath(addTodo({ text }))
		setText(initialValueInput)
	};

	return (
		<div className="App">

			<TodoForm text={text} setText={setText} addTodo={addTask}/>

			<TodoList />
		</div>
  );
}

export default App;
