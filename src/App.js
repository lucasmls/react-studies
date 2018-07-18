import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '2',
      textValue: ''
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={e => { e.preventDefault(); console.log(this.state) }}
              onChange={e => { console.log(e.target.name); } }>
          <textarea name="conteudo"
                    cols="30"
                    rows="10"
                    value={this.state.value}
                    onChange={e => ( this.setState({ value: e.target.value }) )} />
            
            <input type="text"
                  name="input"
                  value={this.state.textValue}
                  onChange={e => ( this.setState({ textValue: e.target.value }) )} />

            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App
