import { createStore, combineReducers } from 'redux'
import counters from './reducers/counter'

export default createStore(
  combineReducers({
    counters
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())