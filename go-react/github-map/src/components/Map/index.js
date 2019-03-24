import React, { Component } from 'react'
import MapGL from 'react-map-gl'

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -19.9651161,
      longitude: -43.9838844,
      zoom: 14
    }
  }

  componentDidMount = () => {
    window.addEventListener('resize', this._resize)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this._resize)
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }

  render () {
    return (
      <div>
        <MapGL
          {...this.state.viewport}
          mapStyle='mapbox://styles/mapbox/basic-v9'
          mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </div>
    )
  }
}

export default Map
