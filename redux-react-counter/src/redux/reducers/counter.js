const counter = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return [ ...state, 0 ]

    case 'INCREMENT':
      return state.map((counter, index) => (
        index === action.index ? counter +1 : counter
      ))

    case 'DECREMENT':
      return state.map((counter, index) => (
        index === action.index ? counter -1 : counter
      ))

    default:
      return state
  }
}

export default counter