import styled from "styled-components";
import { black, elevation, transition } from "../Utilities";
import { animated } from "react-spring";

export const Card = styled(animated.div)`
  background: white;
  border-radius: 5px;
  padding: 15px;
  max-width: 320px;
  margin: 0 auto;

  color: ${black};
  ${elevation[4]};
  ${transition({
    property: "box-shadow"
  })}
  &:hover {
    ${elevation[5]}
  }
`;
