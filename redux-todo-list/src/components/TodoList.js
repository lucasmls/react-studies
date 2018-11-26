import React from 'react'
import { connect } from 'react-redux'

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li>{todo.text}</li>
      )) }
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList)