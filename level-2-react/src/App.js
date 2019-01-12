import React, { Component, Fragment } from "react";

import Toggle from "./Utilities/Toggle";
import Portal from "./Utilities/Portal";

import Modal from "./components/Modal/Modal";

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

          <Toggle>
            {({ on, toggle }) => (
              <div>
                <button onClick={toggle}>Show Modal</button>
                <Modal on={on} toggle={toggle}>
                  <p>Modal Content!</p>
                </Modal>
              </div>
            )}
          </Toggle>
        </div>
      </div>
    );
  }
}

export default App;
