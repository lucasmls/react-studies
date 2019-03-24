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
const INITIAL_STATE = []

export default function users (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TEST':
      return state

    default:
      return state
  }
}
