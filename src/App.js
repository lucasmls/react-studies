import React, { Component } from 'react'
import Plugin from './Plugin'

class App extends Component {
  constructor () {
    super()
    this.state = { }
  }

  render() {
    return (
      <div className="container">
        <Plugin />
      </div>
    )
  }
}

export default App
