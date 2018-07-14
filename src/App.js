import React, { Component } from 'react';
import Title from './Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="hello">Hello React</h1>
        <Title name="Lucas" last_name={ [1, 2, 3, `lucas`, 10] } />
      </div>
    );
  }
}

export default App;
