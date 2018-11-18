import React, { PureComponent } from 'react'
import Counter from './components/Counter/Counter'

class App extends PureComponent {
  state = {
    counter: 0
  }

  increment = () => this.setState({ counter: this.state.counter + 1  })

  decrement = () => this.setState({ counter: this.state.counter - 1  })

  render() {
    return (
      <Counter
        counter={this.state.counter}
        increment={this.increment}
        decrement={this.decrement} />
    )
  }
}

export default App
