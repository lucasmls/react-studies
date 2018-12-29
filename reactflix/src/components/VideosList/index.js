import React from 'react'

// Redux
import { connect } from 'react-redux'

// Components
import Video from '../Video'

// Styles
import { ListContainer } from './styles'

const VideosList = ({ videos }) => {
  return (
    <ListContainer>
      {Object.keys(videos).map(key => (
        <Video key={key} title={videos[key].title} />
      ))}
    </ListContainer>
  );
}

const mapStateToProps = state => ({
  videos: state.videos
})

export default connect(mapStateToProps)(VideosList)