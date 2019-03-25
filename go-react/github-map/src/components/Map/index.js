import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import 'mapbox-gl/dist/mapbox-gl.css'

import MapGL, { Marker } from 'react-map-gl'
import Pin from '../Pin'
import { Creators as ModalActions } from '../../store/ducks/modal'

class Map extends Component {
  static propTypes = {
    openUserModal: PropTypes.func,
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
    const [longitude, latitude] = e.lngLat
    this.props.openUserModal({ latitude, longitude })
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
          {console.log('Dentro do mapa', this.props.users)}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
