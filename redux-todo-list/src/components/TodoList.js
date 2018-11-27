import React from 'react'
import { connect } from 'react-redux'

import Todo from './Todo'
import { toggleTodoStatus } from '../actions'

const TodoList = ({ todos, dispatch }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          {...todo}
          key={todo.id}
          onClick={() => dispatch(toggleTodoStatus(todo.id))} />
      )) }
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList)