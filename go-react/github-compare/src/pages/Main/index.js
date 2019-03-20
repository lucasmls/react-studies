import React, { Component } from 'react'
import moment from 'moment'

import CompareList from '../../components/CompareList'
import { Container, Form } from './styles'
import logo from '../../assets/logo.png'
import api from '../../services/api'

class Main extends Component {
  constructor () {
    super()
    this.inputRef = React.createRef()
  }

  state = {
    repositories: []
  }

  handleAddRepository = async e => {
    e.preventDefault()
    const userAndRepo = e.target.repository.value

    try {
      const { data: repository } = await api.get(`/repos/${userAndRepo}`)

      repository.lastCommit = moment(repository.pushed_at).fromNow()
      this.inputRef.current.value = ''

      this.setState({
        repositories: [...this.state.repositories, repository]
      })
    } catch (error) {
      console.log('Erro', error)
    }
  }

  render () {
    return (
      <Container>
        <img src={logo} alt='Github compare logo' />

        <Form onSubmit={this.handleAddRepository}>
          <input
            name='repository'
            type='text'
            placeholder='usuário/repositório'
            ref={this.inputRef}
          />
          <button type='submit'>Ok</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    )
  }
}

export default Main
