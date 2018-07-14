import React, { Component } from 'react';
import Title from './Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="hello">Hello React</h1>
        <Title name="Lucas Mendes" />

        <label htmlFor="myInput">Label:</label>
        <input type="text" id="myInput" />
      </div>
    );
  }
}

export default App;
