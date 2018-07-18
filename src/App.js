import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2',
    }
  }

  render() {
    return (
      <div className="container">
        <form action="">
          <textarea
            cols="30"
            rows="10"
            value={this.state.value}
            onChange={e => ( this.setState({ value: e.target.value }) )} />
        </form>
      </div>
    );
  }
}

export default App
