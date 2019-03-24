import React from 'react'
import PropTypes from 'prop-types'

import { StyledPin } from './styles'

const Pin = ({ size, avatar }) => <StyledPin size={size} src={avatar} />

Pin.propTypes = {
  size: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired
}

export default Pin
