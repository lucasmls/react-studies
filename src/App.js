import React, { Component } from 'react'
import Square from './Square'
import RButton from './RButton'

class App extends Component {
  constructor () {
    super()

    this.state = {
      color: 'red'
    }
  }

  render() {
    return (
      <div className="container">
        <Square color={this.state.color}/>
        {
          ['red', 'green', 'blue'].map(color => (
            <RButton handleClick={() => this.setState({ color })}>{ color }</RButton>
          ))
        }
      </div>
    );
  }
}

export default App
