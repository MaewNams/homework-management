// @flow
import type {Action} from '../../../state/types'

export type DeleteHomeworkPayload = {
  // TODO: Add payload content
}

const id = 'homework/DELETE_HOMEWORK'

export const deleteHomework = (): Action<DeleteHomeworkPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

deleteHomework.id = id
