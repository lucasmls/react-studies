import React from 'react'
import PropTypes from 'prop-types'

import { ListContainer, Repository } from './style'

const CompareList = ({ repositories, removeRepository, updateRepository }) => (
  <ListContainer>
    {repositories.map((repository, index) => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>

          <i
            onClick={() => updateRepository(index)}
            className='fa fa-refresh update'
          />

          <i
            onClick={() => removeRepository(index)}
            className='fa fa-times remove'
          />
        </header>

        <ul>
          <li>
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repository.lastCommit} <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </ListContainer>
)

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string
    })
  ).isRequired,
  removeRepository: PropTypes.func,
  updateRepository: PropTypes.func
}

export default CompareList
