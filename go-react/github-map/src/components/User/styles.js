import styled from 'styled-components'

export const UserContainer = styled.div`
  padding: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  h4 {
    color: #030303;
    font-size: 16px;
    margin-bottom: 3px;
  }

  span {
    color: #565656;
    font-weight: 200;
    font-size: 14px;
  }
`
export const UserActions = styled.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon {
    cursor: pointer;
    border-radius: 50%;
    padding: 2px;
    box-sizing: content-box;
    font-size: 12px;
    transition: 0.5s;
  }

  .close {
    color: #fff;
    background-color: #aa1b1b;

    &:hover {
      background-color: red;
    }
  }

  .open {
    color: #c7c7c7;
    &:hover {
      color: #565656;
    }
  }
`
