import React from "react"
import EditForm from "./EditForm"
import useToggle from "./hooks/useToggle"
import "./styles/TodoApp.css"
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"
import { FaEdit, FaTrashAlt } from "react-icons/fa"

function Todo({ id, task, done, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, editToggle] = useToggle(false)

  return (
    <div className="Todo">
      {done ? (
        <MdCheckBox
          className="Todobox checked"
          onClick={() => toggleTodo(id)}
        />
      ) : (
        <MdCheckBoxOutlineBlank
          className="Todobox"
          onClick={() => toggleTodo(id)}
        />
      )}
      <div className={`${done ? "complete" : "incomplete"}`}>
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
      <FaEdit onClick={editToggle} className=" TodoEdit" />
      <FaTrashAlt onClick={() => removeTodo(id)} className="TodoTrash" />
    </div>
  )
}

export default Todo
