// @flow
import type {Action} from '../../../state/types'

export type CreateHomeworkPayload = {
  // TODO: Add payload content
}

const id = 'homework/CREATE_HOMEWORK'

export const createHomework = (): Action<CreateHomeworkPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

createHomework.id = id
