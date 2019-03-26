// @flow
import type {Action} from '../../../state/types'

export type SignOutPayload = {
  // TODO: Add payload content
}

const id = 'session/SIGN_OUT'

export const signOut = (): Action<SignOutPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

signOut.id = id
