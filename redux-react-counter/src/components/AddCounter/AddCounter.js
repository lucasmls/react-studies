import React from 'react'
import { connect } from 'react-redux'

import { addCounter } from '../../redux/action-creators/counter'

const AddCounter = ({ addCounter }) => {
  return (
    <button onClick={addCounter}>Adicionar Contador</button>
  )
}

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch(addCounter())
})

export default connect(null, mapDispatchToProps)(AddCounter)