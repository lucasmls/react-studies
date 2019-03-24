import styled, { createGlobalStyle } from 'styled-components'

export const ModalStyle = createGlobalStyle`
  .user-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -100%);
    width: 300px;
    padding: 15px;
    border-radius: 4px;
    background-color: #fff;

    &__overlay {
      background-color: red;
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background-color: rgba(0, 0, 0, .5);
      z-index: 3;
    }
  }
`

export const ModalTitle = styled.h5`
  text-align: center;
  font-size: 18px;
  color: #030303;
  font-weight: bold;
`

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    border-radius: 3px;
    padding: 5px 10px;
    margin: 15px 0;
    font-size: 14px;
    border: 1px solid #c3c3c3;
    outline: none;
    font-weight: bold;
  }

  .actions {
    display: flex;
  }
`

export const ModalButton = styled.button`
  flex: 1;
  height: 40px;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#c3c3c3'};

  &:nth-child(1) {
    margin-right: 5px;
  }

  &:nth-child(2) {
    margin-left: 5px;
  }
`
