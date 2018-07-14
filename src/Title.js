import React, { Component } from 'react'

class Title extends Component {
  render() { 
    return (
      <h1>Hello { `${this.props.name} ${this.props.last_name}` }</h1>
    )
  }
}

Title.defaultProps = {
  name: 'Nome',
  last_name: 'Sobrenome'
}

export default Title