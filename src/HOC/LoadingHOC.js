import React, { PureComponent } from 'react'

const LoadingHOC = (Wrapper) => (
  class Loading extends PureComponent {
    state = {
      loading: true
    }

    componentDidMount () {
      this.timer = setTimeout(() => this.setState({ loading: false }), 3000)
    }

    componentWillMount () {
      clearTimeout(this.timer)
    }

    render () {
      return this.state.loading ? <div>Loading...</div> : (
        <Wrapper { ...this.props } />
      )
    }
  }
)

export default LoadingHOC;