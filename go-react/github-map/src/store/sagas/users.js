import { call, put, select } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../services/api'
import { Creators as UsersCreators } from '../ducks/users'
import { Creators as ModalCreators } from '../ducks/modal'

export function * fetchUser (action) {
  try {
    const isDuplicated = yield select(state =>
      state.users.data.find(user => user.login === action.payload.username)
    )

    if (isDuplicated) {
      yield put(
        UsersCreators.fetchUserFailure({
          error: 'Este usuário já foi adicionado'
        })
      )

      toast.warn('Este usuário já foi adicionado', {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      const { data } = yield call(api.get, `/users/${action.payload.username}`)

      const user = {
        name: data.name,
        avatar_url: data.avatar_url,
        login: data.login,
        url: data.html_url,
        ...action.payload.coordinates
      }

      yield put(UsersCreators.fetchUserSuccess(user))
      yield put(ModalCreators.closeUserModal())

      toast.success('Usuário Adicionado com sucesso!', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  } catch (error) {
    yield put(
      UsersCreators.fetchUserFailure({ error: 'Usuário não encontrado' })
    )
    toast.error('Usuário não encontrado', {
      position: toast.POSITION.TOP_RIGHT
    })
  }
}
