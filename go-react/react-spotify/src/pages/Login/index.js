import React from 'react'
import { FaRegUser } from 'react-icons/fa'

import { StyledForm, StyledInput, StyledButton } from './styles'
import { loginSchema } from '../../validators'

function Login () {
  const handleSubmit = data => {
    console.log(data)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <FaRegUser size={20} />
      <h2 style={{ marginBottom: '20px' }}>Login page!</h2>

      <StyledForm onSubmit={handleSubmit} schema={loginSchema}>
        <label htmlFor='email'>E-mail:</label>
        <StyledInput name='email' />
        <label htmlFor='password'>Password: </label>
        <StyledInput name='password' type='password' />

        <StyledButton type='submit'>Sign in</StyledButton>
      </StyledForm>
    </div>
  )
}

export default Login
