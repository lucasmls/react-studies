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

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

ReactDOM.render(
  <Provider store={store}>
    <SearchCep />
  </Provider>, document.getElementById('root'))