// @flow
import type {Action} from '../../../state/types'

export type DeleteHomeworkPayload = {
  homeworkId: string
}

const id = 'homework/DELETE_HOMEWORK'

export const deleteHomework = (homeworkId: string): Action<DeleteHomeworkPayload> => ({
  type: id,
  payload: {
    homeworkId
  }
})

deleteHomework.id = id
