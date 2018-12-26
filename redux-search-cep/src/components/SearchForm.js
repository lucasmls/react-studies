import React from 'react'

const SearchForm = () => {
  return (
    <form>
      <fieldset>
        <label htmlFor="cep">CEP</label>
        <input type="text" placeholder="00.000-000" name="cep" id="cep" />
        <button type="submit">
          Buscar
        </button>
      </fieldset>
    </form>
  )
}

export default SearchForm