import React from 'react'
import Counter from './components/Counter/Counter'

import { connect } from 'react-redux'

const App = ({ counter, increment, decrement }) =>  (
  <Counter
    counter={counter}
    increment={increment}
    decrement={decrement} />
)

const mapStateToProps = (state) => ({
  counter: state
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
