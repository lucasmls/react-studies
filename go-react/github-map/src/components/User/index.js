import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes, FaChevronRight } from 'react-icons/fa'
import { UserContainer, UserInfo, UserActions } from './styles'

const User = ({ user }) => (
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
      <FaTimes className='icon close' />
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

export default User
