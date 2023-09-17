import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todo: []
	},
	reducers: {
		addTodo() { },
		removeTodo() { },
		toggleTodoComplete
	},
})