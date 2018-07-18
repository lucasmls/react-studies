import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      checked: false,
      rdCheckedValue: '2'
    }
  }

  render() {
    return (
      <div className="container">
        <form action="">
          <label htmlFor="controlled-input">Controlled Text Input:</label> <br/>
          <input
            id="controlled-input"
            type="text"
            value={this.state.value}
            onChange={e => (this.setState({ value: e.target.value }) )}
          />
          <br/><hr/>
          
          <label htmlFor="uncontrolled-input">Uncontrolled Text Input:</label> <br/>
          <input
            type="text"
            defaultValue="uncontrolled-input"
          />
          <br/><hr/>

          <label htmlFor="controlled-checkbox">Controlled Checkbox</label> <br/>
          <input
            type="checkbox"
            name="check"
            id="controlled-checkbox"
            checked={this.state.checked} onChange={e => (this.setState({
                checked: e.target.checked })
            )}
          />
          <br/><hr/>

          <label htmlFor="uncontrolled-checkbox">Uncontrolled Checkbox</label> <br/>
          <input
            type="checkbox"
            name="uncontrolled-checkbox"
            id="uncontrolled-checkbox"
            defaultChecked
          />
          <br/><hr/>

          <label>
            <input
              type="radio"
              value="1"
              checked={this.state.rdCheckedValue === '1'}
              onChange={ e => (this.setState({ rdCheckedValue: e.target.value })) }
            />
            Controlled Radio 01
          </label> <br/>

          <label>
            <input
              type="radio"
              value="2"
              checked={this.state.rdCheckedValue === '2'}
              onChange={ e => (this.setState({ rdCheckedValue: e.target.value })) }
            />
            Controlled Radio 02
          </label>


        </form>
      </div>
    );
  }
}

export default App
