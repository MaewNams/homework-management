// @flow
import type {Action} from '../../../state/types'

export type GoToGroupWorkPayload = {
  // TODO: Add payload content
}

const id = 'groupWork/GO_TO_GROUP_WORK'

export const goToGroupWork = (): Action<GoToGroupWorkPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

goToGroupWork.id = id
