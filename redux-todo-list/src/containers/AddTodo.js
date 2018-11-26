import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let todoInput
const handleSubmit = (event, dispatch) => {
  event.preventDefault()
  if (!todoInput.value.trim())
    return
  dispatch(addTodo(todoInput.value))
  todoInput.value = ''
}

const AddTodo = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, dispatch)}>
        <input type="text" ref={node => todoInput = node } />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);