import React from 'react';

// Styles
import { App } from './styles'

// Components
import VideoSingle from '../../components/VideoSingle'
import VideosList from '../../components/VideosList'
import Header from '../../components/Header'

const Reactflix = () => {
  return (
    <App>
      <Header />
      <VideoSingle />
      <VideosList />
    </App>
  );
}

export default Reactflix;
