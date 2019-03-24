import React, { Component } from 'react'
import MapGL, { Marker } from 'react-map-gl'
import Pin from '../Pin'

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -19.9651161,
      longitude: -43.9838844,
      zoom: 14
    },
    marker: {
      latitude: -19.9651161,
      longitude: -43.9838844
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

  handleMapClick (e) {
    console.log(e)
    const [latitude, longitude] = e.lngLat

    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`)
  }

  render () {
    return (
      <div>
        <MapGL
          {...this.state.viewport}
          mapStyle='mapbox://styles/mapbox/basic-v9'
          mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
          onViewportChange={viewport => this.setState({ viewport })}
          onClick={this.handleMapClick}
        >
          <Marker
            latitude={this.state.marker.latitude}
            longitude={this.state.marker.longitude}
          >
            <Pin size={48} />
          </Marker>
        </MapGL>
      </div>
    )
  }
}

export default Map
