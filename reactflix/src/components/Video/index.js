import React from 'react'

// Components
import Play from '../Play'

// Styles
import { VideoCard, VideoThumb, VideoTitle, VideoLink } from './styles';

const Video = ({ title, onVideoClick }) => {
  return (
    <VideoCard className="video">
      <VideoLink href="#" onClick={onVideoClick}>
        <VideoThumb className="thumb">
          <Play />
        </VideoThumb>

        <VideoTitle>{ title }</VideoTitle>
      </VideoLink>
    </VideoCard>
  );
}

export default Video;