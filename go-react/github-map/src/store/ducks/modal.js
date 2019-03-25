/**
 * Types
 */
export const Types = {
  OPEN_USER_MODAL: 'modal/OPEN_USER_MODAL',
  CLOSE_USER_MODAL: 'modal/CLOSE_USER_MODAL'
}

/**
 * Actions
 */
export const Creators = {
  openUserModal: coordinates => ({
    type: Types.OPEN_USER_MODAL,
    payload: { coordinates }
  }),

  closeUserModal: () => ({
    type: Types.CLOSE_USER_MODAL
  })
}

/**
 * Reducer
 */
const INITIAL_STATE = {
  isOpened: false,
  coordinates: {}
}

export default function modal (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_USER_MODAL:
      return {
        ...state,
        isOpened: true,
        coordinates: action.payload.coordinates
      }

    case Types.CLOSE_USER_MODAL:
      return { ...state, isOpened: false, coordinates: null }

    default:
      return state
  }
}
