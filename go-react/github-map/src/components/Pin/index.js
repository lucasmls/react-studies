import React from 'react'
import PropTypes from 'prop-types'

import { StyledPin } from './styles'

const Pin = ({ size }) => (
  <StyledPin
    size={size}
    src='https://avatars1.githubusercontent.com/u/20602256?s=460&v=4'
  />
)

Pin.propTypes = {
  size: PropTypes.number.isRequired
}

export default Pin
