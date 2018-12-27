import React from 'react';

// Styles
import { App } from './styles'

// Components
import VideosList from '../../components/VideosList'
import Header from '../../components/Header'

const Reactflix = () => {
  return (
    <App>
      <Header />
      <VideosList />
    </App>
  );
}

export default Reactflix;
