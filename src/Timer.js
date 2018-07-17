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

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log('Timer.js WillReceiveProps', this.props, nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('Timer.js ShouldComponentUpdate', nextProps, nextState)
    //WARNING! O componente só irá renderizar caso a expressão abaixo retorne TRUE
    return this.props.time !== nextProps.time
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log('Timer.js ComponentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Timer.js ComponentDidUpdate', this.state, prevState)
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