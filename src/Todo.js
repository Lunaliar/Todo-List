import React from 'react'
import './styles/TodoList.css'

function Todo({ task, done, id, removeTodo, toggleTodo }) {

  return (
    <div className='Todo'>
      <i onClick={()=> toggleTodo(id)} className={`Todobox fa-regular fa-square${done ? '-check': ''}`}/>
      <div style={{textDecoration: `${done ? 'line-through' : ''}`}}>
        {task}
      </div>
      <i  className=" TodoEdit fa-regular fa-pen-to-square" />
      <i onClick={() => removeTodo(id)} className="TodoTrash fa-regular fa-trash-can" />
    </div>
  )
}

export default Todo