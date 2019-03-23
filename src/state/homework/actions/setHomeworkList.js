// @flow
import type {Action} from '../../../state/types'
import type {Homework} from '../types'

export type SetHomeworkListPayload = {
  homeworkList: ?Homework[]
}

const id = 'homework/SET_HOMEWORK_LIST'

export const setHomeworkList = (homeworkList: ?Homework[]): Action<SetHomeworkListPayload> => ({
  type: id,
  payload: {
    homeworkList
  }
})

setHomeworkList.id = id
