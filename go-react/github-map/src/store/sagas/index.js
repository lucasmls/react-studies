import { all, takeLatest } from 'redux-saga/effects'

import { Types as UsersTypes } from '../ducks/users'
import { fetchUser } from './users'

export default function * rootSaga () {
  yield all([takeLatest(UsersTypes.FETCH_USER, fetchUser)])
}
