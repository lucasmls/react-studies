import React from 'react'

// Components
import Play from '../Play'

// Styles
import { VideoCard, VideoThumb, VideoTitle } from './styles';

const Video = ({ title }) => {
  return (
    <VideoCard className="video">

      <VideoThumb className="thumb">
        <Play />
      </VideoThumb>

      <VideoTitle>
        { title }
      </VideoTitle>

    </VideoCard>
  );
}

export default Video;