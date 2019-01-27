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
        native
        from={{ opacity: 0, bgOpacity: 0, y: -50 }}
        enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
        leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
        config={{
          tension: 180,
          friction: 8
        }}
      >
        {item => styles => (
          <ModalWrapper>
            <ModalCard
              style={{
                transform: styles.y.interpolate(
                  y => `translate3d(0, ${y}px, 0)`
                ),
                ...styles
              }}
            >
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div className="content">{children}</div>
            </ModalCard>
            <ModalBackground
              style={{
                opacity: styles.bgOpacity.interpolate(bgOpacity => bgOpacity)
              }}
              onClick={toggle}
            />
          </ModalWrapper>
        )}
      </Transition>
    )}
  </Portal>
);

export default Modal;
