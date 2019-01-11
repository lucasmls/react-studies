import React, { Component, Fragment } from "react";
import Toggle from "./Utilities/Toggle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Level 2!</header>
        <div className="container">
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Show / Hide</button>
                {on && <p>Content that will toggle!</p>}
              </Fragment>
            )}
          </Toggle>
        </div>
      </div>
    );
  }
}

export default App;
