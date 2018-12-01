import undoable, { includeAction } from 'redux-undo'

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => (
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      ))
    default:
      return state
  }
}

const undoableTodos = undoable(todos, {
  filter: includeAction(['ADD_TODO', 'TOGGLE_TODO'])
})

export default undoableTodos