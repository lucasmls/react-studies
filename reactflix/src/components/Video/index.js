import React, { Fragment } from 'react'

// Components
import VideoThumb from '../VideoThumb'
import VideoTitle from '../VideoTitle'

// Styles
import { VideoCard } from './styles';

const Video = () => {
  return (
    <Fragment>
      <VideoCard className="video">
        <VideoThumb />
        <VideoTitle />
      </VideoCard>
    </Fragment>
  );
}

export default Video;