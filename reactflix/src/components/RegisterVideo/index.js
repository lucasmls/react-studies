import React from 'react'

// Redux
import { connect } from 'react-redux'
import { registerVideo } from '../../redux/actions/videos'

const RegisterVideo = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">ID do Vídeo:</label>
      <input type="text" id="id" name="id" />

      <label htmlFor="title">Título do Vídeo:</label>
      <input type="text" id="title" name="title" />

      <button className="button-primary" type="submit" style={{ marginTop: '10px' }}>Cadastrar</button>
    </form>
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