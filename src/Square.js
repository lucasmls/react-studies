import React from 'react'

const Square = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: '100px',
        width: '100px'
      }}
    />
  )
}

Square.defaultProps = {
  color: 'blue'
}

export default Square