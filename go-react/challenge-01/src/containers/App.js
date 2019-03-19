import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import Post from '../components/Post'

class App extends Component {
  static defaultProps = {
    appName: 'goReact'
  }

  static propTypes = {
    appName: PropTypes.string
  }

  render () {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Post />
        </div>
      </Fragment>
    )
  }
}

export default App
