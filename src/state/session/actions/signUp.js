// @flow
import type {Action} from '../../../state/types'

export type SignUpPayload = {
  email: string,
  password: string,
  rePassword: string,
}

const id = 'session/SIGN_UP'

export const signUp = (email: string, password: string, rePassword: string): Action<SignUpPayload> => ({
  type: id,
  payload: {
    email,
    password,
    rePassword,
  }
})

signUp.id = id
