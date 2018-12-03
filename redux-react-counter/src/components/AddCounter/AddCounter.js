import React from 'react'
import { connect } from 'react-redux'

const AddCounter = ({ addCounter }) => {
  return (
    <button onClick={addCounter}>Adicionar Contador</button>
  )
}

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch({ type: 'ADD_COUNTER' })
})

export default connect(null, mapDispatchToProps)(AddCounter)