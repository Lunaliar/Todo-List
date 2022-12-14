import React from "react"
import EditForm from "./EditForm"
import useToggle from "./hooks/useToggle"
import "./styles/TodoApp.css"

function Todo({ id, task, done, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, editToggle] = useToggle(false)

  return (
    <div className="Todo">
      <i
        onClick={() => toggleTodo(id)}
        className={`Todobox fa-regular fa-square${
          done ? "-check checked" : ""
        }`}
      />
      <div className={`${done ? "complete" : ""}`}>
        {isEditing ? (
          <EditForm
            task={task}
            editTodo={editTodo}
            editToggle={editToggle}
            id={id}
          />
        ) : (
          task
        )}
      </div>
      <i
        onClick={editToggle}
        className=" TodoEdit fa-regular fa-pen-to-square"
      />
      <i
        onClick={() => removeTodo(id)}
        className="TodoTrash fa-regular fa-trash-can"
      />
    </div>
  )
}

export default Todo
