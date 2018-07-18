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
          <label htmlFor="">Uncontrolled</label>
          <select>
            <option value="1">Opção 01</option>
            <option value="2">Opção 02</option>
            <option value="3">Opção 03</option>
          </select>

          <br/>

          <label htmlFor="">Controlled</label>
          <select value={this.state.value} onChange={e => (
            this.setState({ value: e.target.value })
          )}>
            <option value="1">Opção 01</option>
            <option value="2">Opção 02</option>
            <option value="3">Opção 03</option>
          </select>
        </form>
      </div>
    );
  }
}

export default App
