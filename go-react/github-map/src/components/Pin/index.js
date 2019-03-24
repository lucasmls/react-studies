import React from 'react'
import PropTypes from 'prop-types'

const Pin = ({ size }) => (
  <img
    style={{
      borderRadius: 100,
      width: size,
      height: size
    }}
    src='https://avatars1.githubusercontent.com/u/20602256?s=460&v=4'
  />
)

Pin.propTypes = {
  size: PropTypes.number
}

export default Pin
