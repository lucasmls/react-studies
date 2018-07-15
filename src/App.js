import React, { Component } from 'react'
import LikeButton from './LikeButton'
import SearchButton from './SearchButton'

class App extends Component {
  render() {
    return (
      <div className="container">
        <LikeButton />
        <SearchButton />
      </div>
    );
  }
}

export default App
