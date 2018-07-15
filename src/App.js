import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()

    this.state = {
      name: 'Lucas'
    }
  }

  render() {
    return (
      <div className="container" onClick={() => this.setState({ name: Math.random(0, 1000) })}>
        {this.state.name}.js
      </div>
    );
  }
}

export default App
