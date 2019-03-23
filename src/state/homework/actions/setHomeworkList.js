// @flow
import type {Action} from '../../../state/types'

export type SetHomeworkListPayload = {
  // TODO: Add payload content
}

const id = 'homework/SET_HOMEWORK_LIST'

export const setHomeworkList = (): Action<SetHomeworkListPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

setHomeworkList.id = id
