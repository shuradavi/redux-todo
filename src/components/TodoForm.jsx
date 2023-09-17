import React from 'react';

const TodoForm = ({text, setText, addTodo}) => {
	return (
		<label>
				<input value={text} onChange={(e) => setText(e.target.value)} /> 
				<button onClick={addTodo}>Add Todo</button>
			</label>
	);
};

export default TodoForm;