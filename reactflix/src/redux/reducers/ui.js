import { OPEN_REGISTER, CLOSE_REGISTER } from '../actions/types'

const initialState = {
  isRegisterOpened: false
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_REGISTER:
      return {
        ...state,
        isRegisterOpened: true
      }

    case CLOSE_REGISTER:
      return {
        ...state,
        isRegisterOpened: false
      }
    
    default:
      return state
  }
}

export default ui