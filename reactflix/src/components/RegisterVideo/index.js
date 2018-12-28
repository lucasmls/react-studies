import React from 'react'

const RegisterVideo = () => {
  return (
    <form>
      <fieldset>
        <label htmlFor="id">ID do Vídeo:</label>
        <input type="text" id="id" name="id" />

        <label htmlFor="title">Título do Vídeo:</label>
        <input type="text" id="title" name="title" />

        <button className="button-primary" type="submit">Cadastrar</button>
      </fieldset>
    </form>
  )
}

export default RegisterVideo