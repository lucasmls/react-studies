import React, { PureComponent } from 'react'
import Counter from './components/Counter/Counter'

import { connect } from 'react-redux'

class App extends PureComponent {

  increment = () => this.props.dispatch({ type: 'INCREMENT' })

  decrement = () => this.props.dispatch({ type: 'DECREMENT' })

  render() {
    return (
      <Counter
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement} />
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state
})

export default connect(mapStateToProps)(App)
