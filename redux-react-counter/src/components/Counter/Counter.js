import React, { Fragment } from 'react'

const Counter = ({ counter, increment, decrement, removeCounter }) => (
  <Fragment>
    <h1 data-js="counter">{ counter }</h1>
    <button data-js="INCREMENT" onClick={increment}>+</button>
    <button data-js="DECREMENT" onClick={decrement}>-</button>
    <button data-js="REMOVE_COUNTER" onClick={removeCounter}>x</button>
  </Fragment>
)


export default Counter