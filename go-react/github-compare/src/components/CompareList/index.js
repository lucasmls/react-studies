import React from 'react'
import PropTypes from 'prop-types'

import { ListContainer, Repository } from './style'

const CompareList = ({ repositories }) => (
  <ListContainer>
    {repositories.map(repository => (
      <Repository>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
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
            {repository.pushed_at} <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </ListContainer>
)

CompareList.propTypes = {
  repositories: PropTypes.array.isRequired
}

export default CompareList
