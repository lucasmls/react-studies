import React from 'react'

// Redux
import { connect } from 'react-redux'
import { selectVideo } from '../../redux/actions/selected-video'

// Components
import Video from '../Video'

// Styles
import { ListContainer } from './styles'

const VideosList = ({ videos, onVideoClick }) => {
  return (
    <ListContainer>
      {Object.keys(videos).map(key => (
        <Video
          key={key}
          title={videos[key].title}
          onVideoClick={onVideoClick(key)} />
      ))}
    </ListContainer>
  );
}

const mapStateToProps = state => ({
  videos: state.videos
})

const mapDispatchToProps = dispatch => ({
  onVideoClick: key => e => {
    e.preventDefault()
    dispatch(selectVideo(key))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosList)