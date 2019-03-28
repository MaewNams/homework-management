// @flow
import type {Action} from '../../../state/types'

export type GoToGroupWorkPayload = {
  groupId: string,
  homeworkIds: string[],
}

const id = 'groupWork/GO_TO_GROUP_WORK'

export const goToGroupWork = (groupId: string, homeworkIds: string[]): Action<GoToGroupWorkPayload> => ({
  type: id,
  payload: {
    groupId,
    homeworkIds
  }
})

goToGroupWork.id = id
