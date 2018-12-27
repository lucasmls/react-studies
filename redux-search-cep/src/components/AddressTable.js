import React from 'react'

const AddressTable = ({ status, code, state, city, district, address }) => {
  return (
    <div>
      {status === 0 && <p>Não foi encontrado endereço com este CEP.</p>}
      {status === 1 && (
        <table>
          <thead>
            <tr>
              <th>CEP</th>
              <th>Estado</th>
              <th>Cidade</th>
              <th>Bairro</th>
              <th>Rua</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{ code }</td>
              <td>{ state }</td>
              <td>{ city }</td>
              <td>{ district }</td>
              <td>{ address }</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AddressTable