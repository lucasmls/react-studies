import React from 'react'
import PropTypes from 'prop-types'

const RButton = ({ children, handleClick }) => {
  return (
    <button
      className="btn"
      onClick={handleClick}>
        { children }!
      </button>
  )
}

// WARNING
// Para checar todos os PropTypes existentes, checar a documentação
// https://reactjs.org/docs/typechecking-with-proptypes.html
RButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default RButton