import React, { Fragment } from 'react'
import Counter from './components/Counter/Counter'
import AddCounter from './components/AddCounter/AddCounter'
import { connect } from 'react-redux'

const App = ({ counters, increment, decrement }) => (
  <Fragment>
    <AddCounter />
    {counters.map((counter, index) => (
      <Counter
        key={index}
        counter={counter}
        increment={increment(index)}
        decrement={decrement(index)} />
    ))}
  </Fragment>
)

const mapStateToProps = (state) => ({
  counters: state.counters
})

const mapDispatchToProps = (dispatch) => {
  const response = {
    increment: (index) => () => dispatch({ type: 'INCREMENT', index }),
    decrement: (index) => () => dispatch({ type: 'DECREMENT', index })
  }
  return response
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
