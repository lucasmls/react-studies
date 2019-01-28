import React, { Component, Fragment } from "react";
import { Transition } from "react-spring";

import Toggle from "./Utilities/Toggle";

import Modal from "./components/Modal/Modal";
import User from "./components/User/User";
import Drag from "./components/Drag";

import UserProvider from "./Providers/UserProvider";

import { Card } from "./Elements/Cards";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <header>React Level 2!</header>

        <div className="container">
          <section>
            <Drag />
          </section>

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
                    from={{ opacity: 0, bg: "#82d8d8", height: "0px" }}
                    enter={{ opacity: 1, bg: "#524763", height: "100px" }}
                    leave={{ opacity: 0, bg: "#82d8d8", height: "0px" }}
                  >
                    {item =>
                      item &&
                      (styles => (
                        <Fragment>
                          <Card
                            style={{
                              opacity: styles.opacity,
                              padding: "10px",
                              background: styles.bg,
                              height: styles.height,
                              overflow: "hidden"
                            }}
                          >
                            <p>
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. At a mollitia quis officia
                              minima! Quidem in praesentium veritatis harum!
                              Necessitatibus.
                              <b style={{ display: "block" }}>{styles.bg}</b>
                            </p>
                          </Card>
                        </Fragment>
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
