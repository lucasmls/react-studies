import React from 'react'

// Styles
import { Thumb } from './styles'

// Components
import Play from '../Play'

const VideoThumb = () => {
  return (
    <Thumb className="thumb">
      <Play />
    </Thumb>
  );
}

export default VideoThumb;