import React from 'react'

// Styles
import { VideoIFrame, SingleVideoContainer, Title } from './styles'

const VideoSingle = ({ selectedVideo, selectedVideoTitle }) => {
  return (
    <SingleVideoContainer>
      <VideoIFrame 
        width="560"
        height="400"
        src={`https://www.youtube-nocookie.com/embed/${selectedVideo}`}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
      <Title>{ selectedVideoTitle }</Title>
    </SingleVideoContainer>
  );
}

export default VideoSingle;