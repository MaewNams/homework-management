// @flow
import type {User} from '../types'
import type {Action} from '../../../state/types'

export type SetUserPayload = {
  user: ?User
}

const id = 'session/SET_USER'

export const setUser = (user: ?User): Action<SetUserPayload> => ({
  type: id,
  payload: {
    user
  }
})

setUser.id = id
