import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      counter: 0
    }
  }

  incrementCounter = state => (
    { counter: state.counter +1 }
  )

  componentDidMount () {
    console.log('did mount')
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(this.incrementCounter)
    this.setState(state => ({ counter: state.counter +1 }))
    this.setState(state => ({ counter: state.counter +1 }))
    this.setState(state => ({ counter: state.counter +1 }))
    this.setState(state => ({ counter: state.counter +1 }))
  }

  render() {
    console.log('render')
    return (
      <div className="container">
        { this.state.counter }
      </div>
    )
  }
}

export default App
