import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MapGL, { Marker } from 'react-map-gl'
import { connect } from 'react-redux'
import Pin from '../Pin'

import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        avatar_url: PropTypes.string,
        login: PropTypes.string,
        url: PropTypes.string,
        latitude: PropTypes.number,
        longitude: PropTypes.number
      })
    )
  }

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

  handleMapClick = e => {
    const [latitude, longitude] = e.lngLat

    console.log(`Latitude: ${latitude} \nLongitude: ${longitude}`)
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
          {this.props.users.map(user => (
            <Marker
              key={user.login}
              latitude={user.latitude}
              longitude={user.longitude}
            >
              <Pin size={48} avatar={user.avatar_url} />
            </Marker>
          ))}
        </MapGL>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.data
})

export default connect(mapStateToProps)(Map)
