import React, {useEffect, useState} from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";
import useLocalStorageState from "./hooks/useLocalStorageState";
import useTodoState from "./hooks/useTodoState";
import "./styles/TodoApp.css";

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
			<p>
				<a href="https://savcodes.dev">Sav Costabile</a> © 2022
			</p>
		</div>
	);
}

export default TodoApp;
