// @flow
import type {Action} from '../../../state/types'

export type SignInPayload = {
  email: string,
  password: string
}

const id = 'session/SIGN_IN'

export const signIn = (email: string, password: string): Action<SignInPayload> => ({
  type: id,
  payload: {
    email,
    password
  }
})

signIn.id = id
