import styled from 'styled-components'

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;

  border: 1px solid #dcdcdc;
  background-color: #F3F7FC;
  box-shadow: 0px 5px 20px #00000021;
  border-radius: 3px;
  transition: .5s;

  &:hover {
    border: 1px solid #999;
  }
`