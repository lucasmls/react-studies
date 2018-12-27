import styled from 'styled-components'
import { PlayStyled } from '../Play/styles'

export const VideoCard = styled.div`
  cursor: pointer;

  &:hover ${PlayStyled} {
    transition: all .5s ease;
    transform: scale(1.5);
  }
`