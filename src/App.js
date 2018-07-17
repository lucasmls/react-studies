import React, { Component } from 'react'
import RButton from './RButton'

class App extends Component {
  render() {
    return (
      <div className="container">
        <RButton handleClick={() => alert('RButton')}>
          RButton
        </RButton>
      </div>
    );
  }
}

export default App
