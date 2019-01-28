import React, { Component } from "react";
import { Card } from "../../Elements/Cards";
import { Gesture } from "react-with-gesture";
import { Spring, animated, interpolate } from "react-spring";

class Drag extends Component {
  render() {
    return (
      <Gesture>
        {({ down, delta }) => (
          <Spring
            native
            to={{
              x: down ? delta[0] : 0
            }}
            immediate={name => down && name === "x"}
          >
            {({ x }) => (
              <Card
                as={animated.div}
                style={{
                  transform: x.interpolate(x => `translateX(${x}px)`)
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
