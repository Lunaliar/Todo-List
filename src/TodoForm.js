import React from 'react'
import useInputState from './hooks/useInputState'
import './styles/TodoList.css'
function TodoForm(props) {
  const [value, handleChange, reset] = useInputState('')
  const{ addTodo } = props
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
    reset()
  }
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input
      placeholder='Add New Todo'
       type="text"
       value={value} 
       onChange={handleChange}
       className="FormInput"
      />
    </form>
  )
}

export default TodoForm