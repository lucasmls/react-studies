import React from 'react';
import ReactDOM from 'react-dom';
import SearchCep from './containers/SearchCep';

// Redux
import rootReducer from './redux/reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

// Lib
import 'milligram'

const initialState = {
  address: {
    code: '123.312.123-32',
    status: 1,
    state: 'Minas Gerais!',
    city: 'Belo Horizonte!',
    district: 'Savassi!',
    address: 'Pium-i',
    isFetching: false
  }
}

const myLoggerMiddleware = ({ getState, dispatch }) => next => action => {
  console.group(`LOG: ${action.type}`)
  console.log(`LOG: Will dispatch`, action)
  console.log(`Previous state:`, getState())

  const nextAction = next(action)

  console.log(`Next state:`, getState())
  console.groupEnd(`LOG: ${action.type}`)
  return nextAction
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      thunkMiddleware,
      myLoggerMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

ReactDOM.render(
  <Provider store={store}>
    <SearchCep />
  </Provider>, document.getElementById('root'))