// @flow
import type {Action} from '../../../state/types'

export type DeleteGroupHomeworkPayload = {
  homeworkId: string
}

const id = 'groupWork/DELETE_GROUP_HOMEWORK'

export const deleteGroupHomework = (homeworkId: string): Action<DeleteGroupHomeworkPayload> => ({
  type: id,
  payload: {
    homeworkId
  }
})

deleteGroupHomework.id = id
