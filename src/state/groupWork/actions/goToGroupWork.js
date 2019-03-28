// @flow
import type {Action} from '../../../state/types'

export type GoToGroupWorkPayload = {
  groupId: string,
}

const id = 'groupWork/GO_TO_GROUP_WORK'

export const goToGroupWork = (groupId: string): Action<GoToGroupWorkPayload> => ({
  type: id,
  payload: {
    groupId
  }
})

goToGroupWork.id = id
