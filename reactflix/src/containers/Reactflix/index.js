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
    console.log('Component Did Mount')
    this.props.fetchVideos()
  }

  render () {
    const { isRegisterOpened } = this.props

    return (
      <App>
        <Header />
        {isRegisterOpened && <RegisterVideo />}
        <VideoSingle />
        <VideosList />
      </App>
    );
  }
}

const mapStateToProps = state => ({
  isRegisterOpened: state.ui.isRegisterOpened,
})

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reactflix);
