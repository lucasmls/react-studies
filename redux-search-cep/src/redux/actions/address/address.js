// Action Types
import { FETCH_ADDRESS_REQUEST, FETCH_ADDRESS_SUCCESS } from './types'

export const fetchAddressRequest = () => ({
  type: FETCH_ADDRESS_REQUEST,
})

export const fetchAddressSuccess = address => ({
  type: FETCH_ADDRESS_SUCCESS,
  address
})

export const fetchAddress = CEP => async dispatch => {
  dispatch(fetchAddressRequest())
  const response = await fetch(`http://apps.widenet.com.br/busca-cep/api/cep.json?code=${CEP}`)
  const address = await response.json()
  dispatch(fetchAddressSuccess(address))
}