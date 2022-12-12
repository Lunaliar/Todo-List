import React from "react";
import useTodoState from "./hooks/useTodoState";
import "./styles/TodoApp.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
	const initialTodos = [{task: "Hi Im a Todo!", done: false, id: 1}];
	const {
		todos,
		addTodo,
		removeTodo,
		toggleTodo,
		toggleAllDone,
		toggleAllUndone,
		editTodo,
		deleteAll,
	} = useTodoState(initialTodos);
	// useLocalStorageState(todos, initialTodos);

	return (
		<div className="TodoApp">
			<div className="buffer"></div>
			<TodoForm
				addTodo={addTodo}
				toggleAllDone={toggleAllDone}
				toggleAllUndone={toggleAllUndone}
				deleteAll={deleteAll}
			/>
			<TodoList
				todos={todos}
				removeTodo={removeTodo}
				toggleTodo={toggleTodo}
				editTodo={editTodo}
			/>
			<p className="credit">
				<a href="https://savcodes.dev">Sav Costabile</a> © 2022
			</p>
		</div>
	);
}

export default TodoApp;
