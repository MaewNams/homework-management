// @flow
import type {Action} from '../../../state/types'

export type CreateGroupPayload = {
  // TODO: Add payload content
}

const id = 'groupWork/CREATE_GROUP'

export const createGroup = (): Action<CreateGroupPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

createGroup.id = id
