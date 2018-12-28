import { ADD_VIDEO } from '../../actions/types'

const videos = (state = {}, action) => {
  switch (action.type) {
    case ADD_VIDEO:
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          title: action.payload.title
        }
      }

    default:
      return state
  }
}

export default videos