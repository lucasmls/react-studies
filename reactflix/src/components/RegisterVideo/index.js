import React from 'react'

// Redux
import { connect } from 'react-redux'
import { registerVideo } from '../../redux/actions/videos'

// Styles
import { RegisterForm, CloseRegisterButton } from './styles'

const RegisterVideo = ({ handleSubmit }) => {
  return (
    <RegisterForm onSubmit={handleSubmit}>
      <h2>Cadastrar Vídeo</h2>
      <label htmlFor="id">ID do Vídeo:</label>
      <input type="text" id="id" name="id" />

      <label htmlFor="title">Título do Vídeo:</label>
      <input type="text" id="title" name="title" />

      <button className="button-primary" type="submit" style={{ marginTop: '10px' }}>Cadastrar</button>

      <CloseRegisterButton type="button">&times;</CloseRegisterButton>
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
  }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)