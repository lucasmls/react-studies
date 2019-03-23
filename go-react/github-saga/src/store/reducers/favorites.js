const INITIAL_STATE = []

const favorites = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'facebook/react',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, ea.',
          url: 'www.google.com'
        }
      ]
    default:
      return state
  }
}

export default favorites
