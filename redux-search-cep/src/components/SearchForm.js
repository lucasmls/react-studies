import React from 'react'
import MaskedInput from 'react-text-mask'
import { CPF_MASK } from '../utils/mask'

const SearchForm = () => {
  return (
    <form>
      <fieldset>
        <label htmlFor="cep">CEP</label>
        <MaskedInput mask={CPF_MASK} type="text" placeholder="00.000-000" name="cep" id="cep" />
        <button type="submit">
          Buscar
        </button>
      </fieldset>
    </form>
  )
}

export default SearchForm