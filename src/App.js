import React, { Component } from 'react'
import Timer from './Timer'

class App extends Component {
  constructor () {
    super()
    console.log('App.js constructor')
    this.state = {
      showTimer: true,
      time: 5
    }
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log('App.js will mount')
  }

  componentDidMount() {
    console.log('App.js did mount')
  }

  render() {
    console.log('App.js render')
    return (
      <div className="container">
        <Timer time={this.state.time} />
        <button
          onClick={() => this.setState({ time: this.state.time +10 })}>
          Add +1
        </button>
      </div>
    );
  }
}

export default App
