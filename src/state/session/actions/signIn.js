// @flow
import type {Action} from '../../../state/types'

export type SignInPayload = {
  // TODO: Add payload content
}

const id = 'session/SIGN_IN'

export const signIn = (): Action<SignInPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

signIn.id = id
