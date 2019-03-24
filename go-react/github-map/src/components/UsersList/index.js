import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import User from '../User'
import { List } from './styles'

const UsersList = ({ users }) => (
  <List>
    {users.map(user => (
      <li key={user.login}>
        <User user={user} />
      </li>
    ))}
  </List>
)

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar_url: PropTypes.string,
      login: PropTypes.string,
      url: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number
    })
  )
}

const mapStateToProps = state => ({
  users: state.users.data
})

export default connect(mapStateToProps)(UsersList)
