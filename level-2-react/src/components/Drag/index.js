import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "../../Elements/Cards";
import { Gesture } from "react-with-gesture";
import { Spring, animated, interpolate } from "react-spring";

const DragCard = styled(Card)`
  height: 300px;
  position: absolute;
  width: 320px;
`;

const CardContainer = styled(animated.div)`
  position: relative;
  background: #ccc;
  height: 300px;
  width: 320px;
  margin: 0 auto;
`;

class Drag extends Component {
  onUp = xDelta => () => {
    if (xDelta < -250) {
      alert("Card Removed");
    } else if (xDelta > 250) {
      alert("Card accepted");
    }
  };

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
              <CardContainer
                style={{
                  background: x.interpolate({
                    range: [-300, 300],
                    output: ["#FF1C68", "#14D790"],
                    extrapolate: "clamp"
                  })
                }}
              >
                <DragCard
                  onMouseUp={this.onUp(delta[0])}
                  onTouchEnd={this.onUp(delta[0])}
                  as={animated.div}
                  style={{
                    opacity: x.interpolate({
                      range: [-300, -100],
                      output: [0, 1],
                      extrapolate: "clamp"
                    }),
                    transform: interpolate(
                      [
                        x,
                        x.interpolate({
                          range: [-300, 300],
                          output: [-45, 45],
                          extrapolate: "clamp"
                        })
                      ],
                      (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                    )
                  }}
                >
                  <h1>Drag me {down}</h1>
                </DragCard>
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}

export default Drag;
