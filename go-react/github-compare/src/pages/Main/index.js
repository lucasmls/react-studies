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

  saveRepositories = () => {
    localStorage.setItem(
      'repositories',
      JSON.stringify(this.state.repositories)
    )
  }

  removeRepository = repoIndex => {
    this.setState(
      {
        repositories: this.state.repositories.filter(
          (repository, index) => index !== repoIndex
        )
      },
      () => {
        this.saveRepositories()
      }
    )
  }

  updateRepository = async repoIndex => {
    const repository = this.state.repositories.find(
      (repo, index) => index === repoIndex
    )

    const updatedRepo = await this.fetchRepository(repository.full_name)
    this.setState(
      state => ({
        repositories: state.repositories.map((repo, index) =>
          repoIndex === index ? updatedRepo : repo
        )
      }),
      () => this.saveRepositories()
    )
  }

  fetchRepository = async userAndRepo => {
    const { data: repository } = await api.get(`/repos/${userAndRepo}`)

    repository.lastCommit = moment(repository.pushed_at).fromNow()
    return repository
  }

  handleAddRepository = async e => {
    e.preventDefault()
    this.setState({ isLoading: true })

    try {
      const repository = await this.fetchRepository(e.target.repository.value)
      this.setState({
        repositories: [...this.state.repositories, repository],
        repositoryError: false
      })

      this.saveRepositories()
    } catch (error) {
      this.setState({ repositoryError: true })
    } finally {
      this.setState({ isLoading: false })
      this.inputRef.current.value = ''
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

        <CompareList
          repositories={this.state.repositories}
          removeRepository={this.removeRepository}
          updateRepository={this.updateRepository}
        />
      </Container>
    )
  }
}

export default Main
