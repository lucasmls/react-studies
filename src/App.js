import React, { Component } from 'react'
import Timer from './Timer'

class App extends Component {
  constructor () {
    super()
    console.log('App.js constructor')
    this.state = {
      showTimer: true
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
        { this.state.showTimer && <Timer /> }
        <button
          onClick={() => this.setState({ showTimer: !this.state.showTimer })}
        >
          Show/Hide Timer
        </button>
      </div>
    );
  }
}

export default App
