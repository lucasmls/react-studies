import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoInput"/>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (event) => {
    event.preventDefault()
    const todoText = event.target.todoInput.value
    if (!todoText.trim())
      return
    dispatch(addTodo(todoText))
    event.target.todoInput.value = ''
  }
}) 

export default connect(null, mapDispatchToProps)(AddTodo);