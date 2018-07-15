import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0
    }

    this.timer = false;
  }

  componentDidMount() {
    console.log('Timer.js DidMount')
    this.timer = setInterval(() => {
      this.setState({ time: this.state.time +1})
    }, 1000)
  }

  componentWillUnmount() {
    console.log('Timer.js WillUnmount')
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <label>Timer:</label>
        <span>{ this.state.time }</span>
      </div>
    )
  }
}
 
export default Timer