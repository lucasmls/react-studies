import React from 'react'

// Components
import Play from '../Play'

// Styles
import { VideoCard, VideoThumb, VideoTitle } from './styles';

const Video = () => {
  return (
    <VideoCard className="video">

      <VideoThumb className="thumb">
        <Play />
      </VideoThumb>

      <VideoTitle>
        lalal titleee
      </VideoTitle>

    </VideoCard>
  );
}

export default Video;