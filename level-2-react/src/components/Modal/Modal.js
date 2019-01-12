import React from "react";
import Portal from "../../Utilities/Portal";
import {
  ModalWrapper,
  ModalCard,
  CloseButton,
  ModalBackground
} from "./styles";

const Modal = ({ children, on, toggle }) => (
  <Portal>
    {on && (
      <ModalWrapper className="modal-wrapper">
        <ModalCard className="modal-card">
          <CloseButton className="close-button" onClick={toggle}>
            &times;
          </CloseButton>
          <div className="content">{children}</div>
        </ModalCard>
        <ModalBackground className="modal-background" onClick={toggle} />
      </ModalWrapper>
    )}
  </Portal>
);

export default Modal;
