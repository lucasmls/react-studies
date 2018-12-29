import styled from 'styled-components'
import { PlayStyled } from '../Play/styles'

export const VideoLink = styled.a`
  color: inherit;
`

export const VideoCard = styled.div`
  cursor: pointer;

  &:hover ${PlayStyled} {
    transition: all .5s ease;
    transform: scale(1.5);
  }
`
export const VideoThumb = styled.div`
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

export const VideoTitle = styled.h6`
  margin: 0;
  padding: 0;
`