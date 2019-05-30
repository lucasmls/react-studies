import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from './ducks'
import rootSaga from './sagas'

import history from '../routes/history'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(rootSaga)

export default store
