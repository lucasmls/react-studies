/**
 * Types
 */
export const Types = {
  FETCH_USER: 'users/FETCH_USER',
  FETCH_USER_SUCCESS: 'users/FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'users/FETCH_USER_FAILURE',
  REMOVE_USER: 'users/REMOVE_USER'
}

/**
 * Actions
 */
export const Creators = {
  fetchUser: payload => ({
    type: Types.FETCH_USER,
    payload
  }),

  fetchUserSuccess: user => ({
    type: Types.FETCH_USER_SUCCESS,
    payload: { user }
  }),

  fetchUserFailure: error => ({
    type: Types.FETCH_USER_FAILURE,
    payload: { error }
  }),

  removeUser: username => ({
    type: Types.REMOVE_USER,
    payload: { username }
  })
}

/**
 * Reducer
 */
const INITIAL_STATE = {
  isLoading: false,
  error: '',
  data: []
}

export default function users (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_USER:
      return { ...state, isLoading: true }

    case Types.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        data: [...state.data, action.payload.user]
      }

    case Types.FETCH_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error }

    case Types.REMOVE_USER:
      return {
        ...state,
        data: state.data.filter(user => user.login !== action.payload.username)
      }

    default:
      return state
  }
}
