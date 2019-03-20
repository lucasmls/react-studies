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
    isLoading: false,
    repositories: [],
    repositoryError: false
  }

  saveRepository = repository => {
    const repositories = JSON.parse(localStorage.getItem('repositories'))
    const updatedRepositories = [...repositories, repository]
    localStorage.setItem('repositories', JSON.stringify(updatedRepositories))
  }

  handleAddRepository = async e => {
    e.preventDefault()
    this.setState({ isLoading: true })
    const userAndRepo = e.target.repository.value

    try {
      const { data: repository } = await api.get(`/repos/${userAndRepo}`)

      repository.lastCommit = moment(repository.pushed_at).fromNow()
      this.inputRef.current.value = ''
      this.setState({
        repositories: [...this.state.repositories, repository],
        repositoryError: false
      })

      this.saveRepository(repository)
    } catch (error) {
      this.setState({ repositoryError: true })
    } finally {
      this.setState({ isLoading: false })
    }
  }

  componentDidMount = () => {
    const storageRepos = JSON.parse(localStorage.getItem('repositories'))
    storageRepos
      ? this.setState({ repositories: [...storageRepos] })
      : localStorage.setItem('repositories', JSON.stringify([]))
  }

  render () {
    return (
      <Container>
        <img src={logo} alt='Github compare logo' />

        <Form
          onSubmit={this.handleAddRepository}
          withError={this.state.repositoryError}
        >
          <input
            name='repository'
            type='text'
            placeholder='usuário/repositório'
            ref={this.inputRef}
          />
          <button type='submit'>
            {this.state.isLoading ? (
              <i className='fa fa-spinner fa-pulse' />
            ) : (
              'Buscar'
            )}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    )
  }
}

export default Main
