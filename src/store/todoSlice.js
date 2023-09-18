import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const todoSlice = createSlice({
	name: 'todo name',
	initialState: {
		todoSlice: []
	},
	reducers: {
		addTodo(state, action) {
			state.todoSlice.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				completed: false,
			})
		},
		removeTodo(state, action) {
			state.todoSlice = state.todoSlice.filter( task => task.id !== action.payload)
		 },
		toggleTodoComplete(state, action) {
			const toggledTask = state.todoSlice.find(task => task.id === action.payload);
			toggledTask.completed = !toggledTask.completed;
		},
	},
})

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;