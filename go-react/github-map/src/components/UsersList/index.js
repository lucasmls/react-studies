import React from 'react'
import User from '../User'

import { List } from './styles'

const UsersList = () => (
  <List>
    {Array.from({ length: 5 }).map(user => (
      <li>
        <User />
      </li>
    ))}
  </List>
)

export default UsersList
