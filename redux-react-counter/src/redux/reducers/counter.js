export const ADD_COUNTER = 'ADD_COUNTER'
export const REMOVE_COUNTER = 'REMOVE_COUNTER'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const initialState = []
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [ ...state, 0 ]

    case REMOVE_COUNTER:
      return state.filter((counter, index) => index !== action.index)

    case INCREMENT:
      return state.map((counter, index) => index === action.index ? counter +1 : counter)

    case DECREMENT:
      return state.map((counter, index) => index === action.index ? counter -1 : counter)

    default:
      return state
  }
}

export default counter