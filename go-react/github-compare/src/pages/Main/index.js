import React, { useState, useEffect } from 'react'
import moment from 'moment'

import CompareList from '../../components/CompareList'
import { Container, Form } from './styles'
import logo from '../../assets/logo.png'
import api from '../../services/api'

function Main () {
  const [repositories, setRepositories] = useState([])
  const [searchRepo, setSearchRepo] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  function getLocalRepositories () {
    return JSON.parse(localStorage.getItem('repositories')) || []
  }

  function saveLocalRepositories () {
    localStorage.setItem('repositories', JSON.stringify(repositories))
  }

  function removeRepository (repoIndex) {
    setRepositories(
      repositories.filter((repository, index) => index !== repoIndex)
    )
  }

  async function updateRepository (repoIndex) {
    const repository = repositories.find((repo, index) => index === repoIndex)

    const updatedRepository = await fetchRepository(repository.full_name)

    setRepositories(
      repositories.map((repo, index) =>
        repoIndex === index ? updatedRepository : repo
      )
    )
  }

  async function fetchRepository (userAndRepo) {
    const { data: repository } = await api.get(`/repos/${userAndRepo}`)
    repository.lastCommit = moment(repository.pushed_at).fromNow()
    return repository
  }

  async function handleSubmit (e) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const repository = await fetchRepository(searchRepo)
      setRepositories([...repositories, repository])
      setHasError(false)
    } catch (error) {
      setHasError(true)
    } finally {
      setSearchRepo('')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setRepositories(getLocalRepositories())
  }, [])

  useEffect(() => {
    saveLocalRepositories()
  }, [repositories])

  return (
    <Container>
      <img src={logo} alt='Github compare logo' />

      <Form onSubmit={handleSubmit} withError={hasError}>
        <input
          name='repository'
          type='text'
          placeholder='usuário/repositório'
          value={searchRepo}
          onChange={e => setSearchRepo(e.target.value)}
        />

        <button type='submit'>
          {isLoading ? <i className='fa fa-spinner fa-pulse' /> : 'Buscar'}
        </button>
      </Form>

      <CompareList
        repositories={repositories}
        removeRepository={removeRepository}
        updateRepository={updateRepository}
      />
    </Container>
  )
}

export default Main
