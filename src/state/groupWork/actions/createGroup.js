// @flow
import type {Action} from '../../../state/types'

export type CreateGroupPayload = {
  name: string,
  detail: string,
}

const id = 'groupWork/CREATE_GROUP'

export const createGroup = (name: string, detail: string): Action<CreateGroupPayload> => ({
  type: id,
  payload: {
    name,
    detail,
  }
})

createGroup.id = id
