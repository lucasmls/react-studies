import styled from "styled-components";
import { black, elevation, transition } from "../Utilities";

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;

  color: ${black};
  ${elevation[4]};
  ${transition({
    property: "box-shadow"
  })}
  &:hover {
    ${elevation[5]}
  }
`;
