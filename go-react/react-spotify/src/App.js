import React from 'react'

// Components
import Sidebar from './components/Sidebar'
import Player from './components/Player'

// Style
import GeneralStyles from './styles/general'
import { Wrapper, Container } from './styles/components'

function App () {
  return (
    <Wrapper>
      <GeneralStyles />

      <Container>
        <Sidebar />
      </Container>
      <Player />
    </Wrapper>
  )
}

export default App
