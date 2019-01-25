import React from "react";
import Portal from "../../Utilities/Portal";
import {
  ModalWrapper,
  ModalCard,
  CloseButton,
  ModalBackground
} from "./styles";

import Icon from "../../Utilities/Icon";
import { Transition } from "react-spring";

const Modal = ({ children, on, toggle }) => (
  <Portal>
    {on && (
      <Transition
        from={{ opacity: 0, bgOpacity: 0, y: -50 }}
        enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
        leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
      >
        {item => styles => (
          <ModalWrapper>
            <ModalCard
              style={{
                transform: `translate3d(0, ${styles.y}px, 0)`,
                ...styles
              }}
            >
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div className="content">{children}</div>
            </ModalCard>
            <ModalBackground
              style={{ opacity: styles.bgOpacity }}
              onClick={toggle}
            />
          </ModalWrapper>
        )}
      </Transition>
    )}
  </Portal>
);

export default Modal;
