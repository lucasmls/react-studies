import React, { Component } from 'react'

class Plugin extends Component {
  render() { 
    return (
      <div>
        <input type="text" ref={nodeInput => this.myRefInput = nodeInput}/>
        <button onClick={() => this.myRefInput.focus()}>Clique aqui</button>
      </div>
    )
  }
}
 
export default Plugin;