import React from 'react'

// Redux
import { connect } from 'react-redux'
import { registerVideo } from '../../redux/actions/videos'
import { closeRegisterForm } from '../../redux/actions/ui'

// Styles
import { RegisterForm, CloseRegisterButton } from './styles'

const RegisterVideo = ({ handleSubmit, handleCloseRegister }) => {
  return (
    <RegisterForm onSubmit={handleSubmit}>
      <h2>Cadastrar Vídeo</h2>
      <label htmlFor="id">ID do Vídeo:</label>
      <input type="text" id="id" name="id" />

      <label htmlFor="title">Título do Vídeo:</label>
      <input type="text" id="title" name="title" />

      <button className="button-primary" type="submit" style={{ marginTop: '10px' }}>Cadastrar</button>

      <CloseRegisterButton type="button" onClick={handleCloseRegister}>&times;</CloseRegisterButton>
    </RegisterForm>
  )
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: async e => {
    e.preventDefault()
    e.persist()
    const payload = { id: e.target.id.value, title: e.target.title.value }
    await dispatch(registerVideo(payload))
    e.target.reset()
    e.target[0].focus()
  },
  handleCloseRegister: () => dispatch(closeRegisterForm())
})

export default connect(null, mapDispatchToProps)(RegisterVideo)