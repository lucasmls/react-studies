import React from 'react'

// Components
import VideoThumb from '../VideoThumb'
import VideoTitle from '../VideoTitle'

// Styles
import { VideoCard } from './styles';

const Video = () => {
  return (
    <VideoCard className="video">
      <VideoThumb />
      <VideoTitle />
    </VideoCard>
  );
}

export default Video;