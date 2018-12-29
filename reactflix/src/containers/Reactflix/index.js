import React from 'react';

// Redux
import { connect } from 'react-redux'

// Styles
import { App } from './styles'

// Components
import Header from '../../components/Header'
import RegisterVideo from '../../components/RegisterVideo'
import VideoSingle from '../../components/VideoSingle'
import VideosList from '../../components/VideosList'

const Reactflix = ({ isRegisterOpened }) => {
  return (
    <App>
      <Header />
      {isRegisterOpened && <RegisterVideo />}
      <VideoSingle />
      <VideosList />
    </App>
  );
}

const mapStateToProps = state => ({
  isRegisterOpened: state.ui.isRegisterOpened,
})

export default connect(mapStateToProps)(Reactflix);
