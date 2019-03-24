import React from 'react'
import { FaTimes, FaChevronRight } from 'react-icons/fa'
import { UserContainer, UserInfo, UserActions } from './styles'

const User = () => (
  <UserContainer>
    <img
      src='https://avatars1.githubusercontent.com/u/20602256?s=460&v=4'
      alt=''
    />
    <UserInfo>
      <h4>Lucas Mendes</h4>
      <span>lucasmls</span>
    </UserInfo>
    <UserActions>
      <FaTimes className='icon close' />
      <FaChevronRight className='icon open' />
    </UserActions>
  </UserContainer>
)

export default User
