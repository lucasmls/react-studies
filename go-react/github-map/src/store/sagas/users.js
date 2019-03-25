import { call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'

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

    toast.success('Usuário Adicionado com sucesso!', {
      position: toast.POSITION.TOP_RIGHT
    })
  } catch (error) {
    yield put(
      UsersCreators.fetchUserFailure({ error: 'Usuário não encontrado' })
    )
    toast.error('Usuário não encontrado', {
      position: toast.POSITION.TOP_RIGHT
    })
  }
}
