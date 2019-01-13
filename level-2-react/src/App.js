import React, { Component, Fragment } from "react";

import Toggle from "./Utilities/Toggle";

import Modal from "./components/Modal/Modal";
import User from "./components/User/User";

import UserProvider from "./Providers/UserProvider";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <header>React Level 2!</header>
        <div className="container">
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Show / Hide</button>
                {on && <p>Content that will toggle!</p>}
              </Fragment>
            )}
          </Toggle>

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

          <User />
        </div>
      </UserProvider>
    );
  }
}

export default App;
