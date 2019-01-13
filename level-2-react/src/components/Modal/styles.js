import styled from "styled-components";
import { Card } from "../../Elements/Cards";
import { absolute } from "../../Utilities";

export const ModalWrapper = styled.div`
  ${absolute()};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalCard = styled(Card)`
  position: relative;
  min-width: 320px;
  z-index: 2;
  margin-bottom: 100px;
`;

export const CloseButton = styled.button`
  ${absolute({
    y: "top",
    x: "right"
  })};
  border: none;
  background: transparent;
  padding: 10px;
`;

export const ModalBackground = styled.div`
  ${absolute()}
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
