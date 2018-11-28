import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          {...todo}
          key={todo.id}
          onClick={() => toggleTodo(todo.id)} />
      )) }
    </ul>
  )
}

export default TodoList