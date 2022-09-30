import React, { useState } from 'react'
import Navbar from './Navbar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import './styles/TodoApp.css'


function TodoApp() {
  const initialTodos= [
    { task: 'Wash dishes', done: false, id:1 },
    { task: 'Fold laundry', done: false, id:2},
    { task: 'Sweep floor', done: false, id:3},
    { task: 'Flip litterboxes', done: false, id:4},
    { task: 'Clean bathrooms', done: false, id:5}
  ]
  const [todos, setTodos] = useState(initialTodos)

  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, done: false }])
  }
  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo=> todo.id !== todoId)
    setTodos(updatedTodos)
  }
  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo=> {
     return todo.id === todoId ? {...todo, done: !todo.done} : todo
    })
    setTodos(updatedTodos)
  }
  const toggleAllDone = () => {
    const updatedTodos = todos.map(todo =>{
      return {...todo, done: true}
    })
    setTodos(updatedTodos)
  }
  const toggleAllUndone = () => {
    const updatedTodos = todos.map(todo =>{
      return {...todo, done: false}
    })
    setTodos(updatedTodos)
  }

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? {...todo, task: newTask} : todo
    )
    setTodos(updatedTodos)
  }

  const deleteAll = () => {
    const updatedTodos = todos.filter(todo=> todo.done === false)
    setTodos(updatedTodos) 
  }

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