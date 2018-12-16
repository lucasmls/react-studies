import React, { Fragment } from 'react'
import Counter from './components/Counter/Counter'
import AddCounter from './components/AddCounter/AddCounter'
import { connect } from 'react-redux'

import { removeCounter, increment, decrement } from './redux/action-creators/counter'

const App = ({ counters, increment, decrement, removeCounter }) => (
  <Fragment>
    <AddCounter />
    {counters.map((counter, index) => (
      <Counter
        key={index}
        counter={counter}
        increment={increment(index)}
        decrement={decrement(index)}
        removeCounter={removeCounter(index)} />
    ))}
  </Fragment>
)

const mapStateToProps = ({ counters }) => ({
  counters
})

const mapDispatchToProps = (dispatch) => ({
    increment: index => () => dispatch(increment(index)),
    decrement: index => () => dispatch(decrement(index)),
    removeCounter: index => () => dispatch(removeCounter(index)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
