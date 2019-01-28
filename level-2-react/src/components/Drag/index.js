import React, { Component } from "react";
import { Card } from "../../Elements/Cards";
import { Gesture } from "react-with-gesture";
import { Spring, animated, interpolate } from "react-spring";

class Drag extends Component {
  render() {
    const x = 0;
    const y = 1;

    return (
      <Gesture>
        {({ down, delta }) => (
          <Spring
            to={{
              x: down ? delta[x] : 0
            }}
            immediate={name => down && name === "x"}
          >
            {props => (
              <Card
                style={{
                  transform: `translateX(${props.x}px)`
                }}
              >
                <h1>Drag me {down}</h1>
              </Card>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}

export default Drag;
