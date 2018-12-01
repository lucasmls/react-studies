import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { VisibilityFilters, toggleTodoStatus } from '../actions'

const getVisibleTodos = (todos, activeFilter) => {
  switch(activeFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      console.log('defauuulltt', activeFilter, todos)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodoStatus(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
