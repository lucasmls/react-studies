import { all, takeLatest } from 'redux-saga/effects'

function * login ({ payload }) {
  try {
  } catch (error) {}
}

export default function * authWatcher () {
  yield all([takeLatest('LOGIN', login)])
}
