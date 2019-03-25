// @flow
import type {Action} from '../../../state/types'

export type SetUserPayload = {
  // TODO: Add payload content
}

const id = 'session/SET_USER'

export const setUser = (): Action<SetUserPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

setUser.id = id
