import React from 'react';

// Redux
import { connect } from 'react-redux'
import { registerVideo } from '../../redux/actions/videos'

// Styles
import { App } from './styles'

// Components
import Header from '../../components/Header'
import RegisterVideo from '../../components/RegisterVideo'
import VideoSingle from '../../components/VideoSingle'
import VideosList from '../../components/VideosList'

const Reactflix = ({ handleSubmit }) => {
  return (
    <App>
      <Header />
      <RegisterVideo handleSubmit={handleSubmit} />
      <VideoSingle />
      <VideosList />
    </App>
  );
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: e => {
    e.preventDefault()
    const payload = { id: e.target.id.value, title: e.target.title.value }
    dispatch(registerVideo(payload))
  }
})

export default connect(null, mapDispatchToProps)(Reactflix);
