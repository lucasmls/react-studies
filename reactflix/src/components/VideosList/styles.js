import styled from 'styled-components'

import { VideoCard } from '../Video/styles'

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 4rem;

  & ${VideoCard} {
    flex: 1 1 300px;
    margin: 1rem;
  }
`