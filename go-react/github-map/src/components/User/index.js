import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes, FaChevronRight } from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { UserContainer, UserInfo, UserActions } from './styles'
import { Creators as UsersActions } from '../../store/ducks/users'

const User = ({ user, removeUser }) => (
  <UserContainer>
    <a href={user.url} target='blank'>
      <img src={user.avatar_url} alt='' />
    </a>
    <UserInfo>
      <a href={user.url} target='blank'>
        <h4>{user.name}</h4>
      </a>
      <span>{user.login}</span>
    </UserInfo>
    <UserActions>
      <FaTimes className='icon close' onClick={() => removeUser(user.login)} />
      <a
        href={user.url}
        target='blank'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <FaChevronRight className='icon open' />
      </a>
    </UserActions>
  </UserContainer>
)

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    url: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number
  })
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(User)
