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
  data: [
    {
      name: 'Lucas Mendes',
      avatar_url: 'https://avatars3.githubusercontent.com/u/20602256?v=4',
      login: 'lucasmls',
      url: 'https://github.com/lucasmls',
      latitude: -19.9651161,
      longitude: -43.9838844
    },
    {
      name: 'Daniel Lima',
      avatar_url: 'https://avatars0.githubusercontent.com/u/19600836?v=4',
      login: 'danilsbh',
      url: 'https://github.com/danilsbh',
      latitude: -19.9616492,
      longitude: -43.9910895
    }
  ]
}

export default function users (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TEST':
      return state

    default:
      return state
  }
}
