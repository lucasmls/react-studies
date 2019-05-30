/**
 * Types
 */
export const Types = {}

/**
 * Actions
 */
export const Creators = {}

/**
 * Reducer
 */
const INITIAL_STATE = {
  signedIn: false
}

export default function auth (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TEST':
      return state

    default:
      return state
  }
}
