import React, { useState } from "react"
import useInputState from "../hooks/useInputState"
import "../styles/TodoApp.css"

function TodoForm({ addTodo, toggleAllDone, toggleAllUndone, deleteAll }) {
  const [value, handleChange, reset] = useInputState("")
  const [allSelect, setAll] = useState("false")

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    reset()
  }
  const allDone = () => {
    toggleAllDone()
    setAll(!allSelect)
  }
  const allUndone = () => {
    toggleAllUndone()
    setAll(!allSelect)
  }

  return (
    <div className="TodoForm">
      <i
        title="Select all"
        onClick={allSelect ? allDone : allUndone}
        className="SelectAll fa-solid fa-list-check"
      />
      <form onSubmit={handleSubmit}>
        <input
          maxLength={20}
          placeholder="Add New Todo"
          type="text"
          value={value}
          onChange={handleChange}
          className="FormInput"
        />
      </form>
      <i
        title="Delete Selected"
        onClick={deleteAll}
        className="TrashAll fa-solid fa-trash"
      />
    </div>
  )
}

export default TodoForm
