import React from 'react'

import { Container, NewPlaylist, Nav } from './styles'

// Assets
import AddPlaylistIcon from '../../assets/images/add_playlist.svg'

function Sidebar () {
  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <a href='#'>Navegar</a>
          </li>
          <li>
            <a href='#'>Rádio</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>Sua biblioteca</span>
          </li>
          <li>
            <a href='#'>Seu Daily Mix</a>
          </li>
          <li>
            <a href='#'>Tocados recentemente</a>
          </li>
          <li>
            <a href='#'>Músicas</a>
          </li>
          <li>
            <a href='#'>Álbums</a>
          </li>
          <li>
            <a href='#'>Artistas</a>
          </li>
          <li>
            <a href='#'>Estações</a>
          </li>
          <li>
            <a href='#'>Arquivos locais</a>
          </li>
          <li>
            <a href='#'>Vídeos</a>
          </li>
          <li>
            <a href='#'>Podcasts</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>Playlists</span>
          </li>
          <li>
            <a href='#'>Melhores do rock</a>
          </li>
        </Nav>
      </div>

      <NewPlaylist>
        <img src={AddPlaylistIcon} alt='Adicionar playlist' />
        Nova playlist
      </NewPlaylist>
    </Container>
  )
}
export default Sidebar
