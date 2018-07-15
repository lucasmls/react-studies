import React from 'react'

const Title = ({name, last_name}) => (
  <h1>Hello { `${name} ${last_name}` }</h1>
)

Title.defaultProps = {
  name: 'UNKNOWN NAME',
  last_name: 'UNKNOWN LAST_NAME'
}

export default Title