import React from 'react'

// Components
import Video from '../Video'

// Styles
import { ListContainer } from './styles'

const VideosList = () => {
  return (
    <ListContainer>
      {Array.from({ length: 14 }).map((video, index) => (
        <Video key={index} />
      ))}
    </ListContainer>
  );
}

export default VideosList;