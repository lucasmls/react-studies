import React from 'react'

const RButton = ({ children, handleClick }) => {
  return (
    <button
      className="btn"
      onClick={handleClick}>
        { children }!
      </button>
  )
}

export default RButton