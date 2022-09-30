import React from 'react'
import useInputState from './hooks/useInputState';

function EditForm({id, task, editToggle, editTodo}) {
  const [value, handleChange, reset] = useInputState(task)

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(id, value);
    editToggle();
  }
  return (
      <form onSubmit={handleSubmit} className='EditForm'>
      <input
       type="text"
       value={value}
       onChange={handleChange}
       className="FormInput"
       style={{textAlign: 'left'}}
      />
      {/*   <i type="submit" className="fa-solid fa-check-double" /> */}
    </form>
  )
}

export default EditForm