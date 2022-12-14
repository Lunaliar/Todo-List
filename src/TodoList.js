import React from "react"
import "./styles/TodoApp.css"
import Todo from "./Todo"

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <div className="TodoList">
      {todos.map(todo => {
        return (
          <Todo
            task={todo.task}
            key={todo.id}
            id={todo.id}
            done={todo.done}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        )
      })}
    </div>
  )
}

export default TodoList
