import React, { Component } from 'react';
import Square from './Square'

class App extends Component {
  render() {
    return (
      <div className="container" onClick={e => alert(`click`)}>
        <Square />
      </div>
    );
  }
}

export default App;
