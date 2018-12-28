import React from 'react';

// Styles
import { App } from './styles'

// Components
import Header from '../../components/Header'
import RegisterVideo from '../../components/RegisterVideo'
import VideoSingle from '../../components/VideoSingle'
import VideosList from '../../components/VideosList'

const Reactflix = () => {
  return (
    <App>
      <Header />
      <RegisterVideo />
      <VideoSingle />
      <VideosList />
    </App>
  );
}

export default Reactflix;
