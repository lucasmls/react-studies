import React, { Component, Fragment } from "react";
import { Transition, Spring } from "react-spring";

import Toggle from "./Utilities/Toggle";

import Modal from "./components/Modal/Modal";
import User from "./components/User/User";

import UserProvider from "./Providers/UserProvider";

import { Card } from "./Elements/Cards";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <header>React Level 2!</header>

        <div className="container">
          <section>
            <h2>Toggle with render props</h2>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button onClick={toggle}>Show / Hide</button>
                  {on && <Header />}
                </Fragment>
              )}
            </Toggle>
          </section>

          <section>
            <h2>React Spring Toggle</h2>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button onClick={toggle}>Toggle</button>
                  <Transition
                    items={on}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                  >
                    {item =>
                      item &&
                      (props => (
                        <div style={props}>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. At a mollitia quis officia minima! Quidem in
                            praesentium veritatis harum! Necessitatibus.
                          </p>
                        </div>
                      ))
                    }
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>

          <section>
            <h2>Modal with Portal and render props</h2>
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
          </section>

          <section>
            <h2>Context API</h2>
            <User />
          </section>
        </div>
      </UserProvider>
    );
  }
}

const Header = styles => (
  <Card style={{ ...styles }}>
    <h1>Show me</h1>
  </Card>
);

export default App;
