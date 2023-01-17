import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import useLocalStorageState from "./useLocalStorageState"

export default initialTodos => {
  //const [todos, setTodos] = useLocalStorageState(initialTodos)
  const [todos, setTodos] = useState(initialTodos)
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuidv4(), task: newTodoText, done: false }])
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId)
      setTodos(updatedTodos)
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => {
        return todo.id === todoId ? { ...todo, done: !todo.done } : todo
      })
      setTodos(updatedTodos)
    },
    toggleAllDone: () => {
      const updatedTodos = todos.map(todo => {
        return { ...todo, done: true }
      })
      setTodos(updatedTodos)
    },
    toggleAllUndone: () => {
      const updatedTodos = todos.map(todo => {
        return { ...todo, done: false }
      })
      setTodos(updatedTodos)
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      )
      setTodos(updatedTodos)
    },
    deleteAll: () => {
      const updatedTodos = todos.filter(todo => todo.done === false)
      setTodos(updatedTodos)
    },
  }
}
