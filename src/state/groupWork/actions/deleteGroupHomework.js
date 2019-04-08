// @flow
import type {Action} from '../../../state/types'

export type DeleteGroupHomeworkPayload = {
  // TODO: Add payload content
}

const id = 'groupWork/DELETE_GROUP_HOMEWORK'

export const deleteGroupHomework = (): Action<DeleteGroupHomeworkPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

deleteGroupHomework.id = id
