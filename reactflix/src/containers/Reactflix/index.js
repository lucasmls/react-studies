import React, { PureComponent } from 'react';

// Redux
import { connect } from 'react-redux'
import { fetchVideos } from '../../redux/actions/videos'

// Styles
import { App } from './styles'

// Components
import Header from '../../components/Header'
import RegisterVideo from '../../components/RegisterVideo'
import VideoSingle from '../../components/VideoSingle'
import VideosList from '../../components/VideosList'

class Reactflix extends PureComponent {

  componentDidMount = () => {
    this.props.fetchVideos()
  }

  render () {
    const { isRegisterOpened, selectedVideo, selectedVideoTitle } = this.props

    return (
      <App>
        <Header />
        { isRegisterOpened && <RegisterVideo /> }
        { selectedVideo && <VideoSingle selectedVideo={selectedVideo} selectedVideoTitle={selectedVideoTitle} /> }
        <VideosList />
      </App>
    );
  }
}

const mapStateToProps = state => ({
  isRegisterOpened: state.ui.isRegisterOpened,
  selectedVideo: state.selectedVideo,
  selectedVideoTitle: state.selectedVideo && state.videos[state.selectedVideo].title
})

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reactflix);
