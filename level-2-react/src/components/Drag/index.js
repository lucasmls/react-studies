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

const CardContainer = styled.div`
  position: relative;
  background: #ccc;
  height: 300px;
  width: 320px;
  margin: 0 auto;
`;

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
              <CardContainer>
                <DragCard
                  as={animated.div}
                  style={{
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
