import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false,
      checked2: false,
      showContent2: false,
    }
  }

  render() {
    return (
      <div className="container">
        <p>Demonstração de que o setState é assíncrono</p>
        <label htmlFor="check">Mostrar/Esconder conteúdo</label>
        <input id="check"
               type="checkbox"
               checked={this.state.checked}
               onChange={e => {
                  this.setState({ checked: !this.state.checked })
                  this.setState({ showContent: this.state.checked })
                }} />

        {this.state.showContent && <p>Conteúdo sendo mostrado!</p>}

        <hr/>

        <p>Correção do setState assíncrono utilizando a função de callback do setState</p>
        <label htmlFor="check2">Mostrar/Esconder conteúdo</label>
        <input id="check2"
               type="checkbox"
               checked={this.state.checked2}
               onChange={e => {
                  this.setState({ checked2: !this.state.checked2 }, () => {
                    this.setState({ showContent2: this.state.checked2 })
                  })
                }} />

        {this.state.showContent2 && <p>Conteúdo corrigido sendo mostrado!</p>}
      </div>
    );
  }
}

export default App
