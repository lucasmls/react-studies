import React from 'react'

// Components
import Video from '../Video'

// Styles
import { ListContainer, SelectedFilter } from './styles'

const VideosList = () => {
  return (
    <ListContainer>
      {Array.from({ length: 14 }).map(video => (
        <Video />
      ))}
    </ListContainer>
  );
}

export default VideosList;