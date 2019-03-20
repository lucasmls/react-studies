import React from 'react'

import { ListContainer, Repository } from './style'

const CompareList = () => (
  <ListContainer>
    <Repository>
      <header>
        <img
          src='https://avatars3.githubusercontent.com/u/69631?v=4'
          alt='facebook'
        />
        <strong>react</strong>
        <small>facebook</small>
      </header>

      <ul>
        <li>
          123,122 <small>stars</small>
        </li>
        <li>
          123,122 <small>forks</small>
        </li>
        <li>
          123,122 <small>issues</small>
        </li>
        <li>
          3 days ago <small>last commit</small>
        </li>
      </ul>
    </Repository>
    <Repository>
      <header>
        <img
          src='https://avatars3.githubusercontent.com/u/69631?v=4'
          alt='facebook'
        />
        <strong>react</strong>
        <small>facebook</small>
      </header>

      <ul>
        <li>
          123,122 <small>stars</small>
        </li>
        <li>
          123,122 <small>forks</small>
        </li>
        <li>
          123,122 <small>issues</small>
        </li>
        <li>
          3 days ago <small>last commit</small>
        </li>
      </ul>
    </Repository>
  </ListContainer>
)

export default CompareList
