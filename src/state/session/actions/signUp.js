// @flow
import type {Action} from '../../../state/types'

export type SignUpPayload = {
  // TODO: Add payload content
}

const id = 'session/SIGN_UP'

export const signUp = (): Action<SignUpPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

signUp.id = id
