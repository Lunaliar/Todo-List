import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './hooks/useLocalStorageState';
import useTodoState from './hooks/useTodoState';
import './styles/TodoApp.css'


function TodoApp() {
  const initialTodos = []
  const { todos, addTodo, removeTodo, toggleTodo, toggleAllDone,
     toggleAllUndone, editTodo, deleteAll } = useTodoState(initialTodos)
    useLocalStorageState(todos, initialTodos)


  return (
    <div className='TodoApp'>
      <Navbar  />
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
    </div>
  )
}

export default TodoApp