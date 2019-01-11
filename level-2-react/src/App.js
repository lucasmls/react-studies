import React, { Component, Fragment } from "react";
import Toggle from "./Utilities/Toggle";
import Portal from "./Utilities/Portal";

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

          <Portal>
            Hey! I'm a portal
            <span role="img" aria-label="Smiling emoji">
              😛
            </span>
          </Portal>
        </div>
      </div>
    );
  }
}

export default App;
