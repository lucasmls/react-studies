import { OPEN_REGISTER, CLOSE_REGISTER } from './types'

export const openRegisterForm = () => ({
  type: OPEN_REGISTER
})

export const closeRegisterForm = () => ({
  type: CLOSE_REGISTER
})