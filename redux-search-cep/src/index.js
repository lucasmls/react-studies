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

const store = createStore(
  rootReducer,
  initialState,
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