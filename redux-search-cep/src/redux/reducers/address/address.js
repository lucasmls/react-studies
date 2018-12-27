import { FETCH_ADDRESS_REQUEST, FETCH_ADDRESS_SUCCESS } from '../../actions/address/types'

const initialState = {
  status: 1,
  code: '',
  state: '',
  city: '',
  district: '',
  address: '',
  isFetching: false,
}

const address = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESS_REQUEST:
      return { ...state, isFetching: true }
    case FETCH_ADDRESS_SUCCESS:
      return { ...action.address, isFetching: false }
    default:
      return state
  }
}

export default address