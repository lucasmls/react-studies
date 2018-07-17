import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div className="container">
        <form action="">
          <input type="text" value={this.state.value} onChange={e => {
            console.log(e)
            this.setState({ value: e.target.value })
          }}/>
        </form>
      </div>
    );
  }
}

export default App
