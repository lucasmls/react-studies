import React, { Component } from 'react';
import Square from './Square'

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          ['red', 'pink', 'blue'].map((color, i) => (
            <Square key={i} color={color} />
          ))
        }
      </div>
    );
  }
}

export default App;
