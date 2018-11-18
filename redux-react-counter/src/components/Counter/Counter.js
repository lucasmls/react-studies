import React, { Fragment } from 'react'

const Counter = ({ counter, increment, decrement }) => (
  <Fragment>
    <h1 data-js="counter">{ counter }</h1>
    <button data-js="INCREMENT" onClick={increment}>+</button>
    <button data-js="DECREMENT" onClick={decrement}>-</button>
  </Fragment>
)


export default Counter