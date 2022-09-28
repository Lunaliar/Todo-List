import React from 'react';
import './styles/TodoList.css'
import Todo from './Todo';

function TodoList({todos, removeTodo, toggleTodo}) {
  return (
    <div className='TodoList'>
        {todos.map(todo=>{
          return <Todo
           task={todo.task}
           key={todo.id}
           id={todo.id}
           done={todo.done}
           removeTodo={removeTodo}
           toggleTodo={toggleTodo}
            />
        })}
    </div>
  )
}

export default TodoList

