import { call, put } from 'redux-saga/effects'
import api from '../../services/api'
import { Creators as UsersCreators } from '../ducks/users'

export function * fetchUser (action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.username}`)

    const user = {
      name: data.name,
      avatar_url: data.avatar_url,
      login: data.login,
      url: data.html_url,
      ...action.payload.coordinates
    }

    yield put(UsersCreators.fetchUserSuccess(user))
  } catch (error) {}
}
