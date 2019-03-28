// @flow
import type {Action} from '../../../state/types'
import type {Homework} from '../types'

export type SetGroupHomeworkListPayload = {
  groupHomeworkList: ?Homework[]
}

const id = 'homework/SET_GROUP_HOMEWORK_LIST'

export const setGroupHomeworkList = (groupHomeworkList: ?Homework[]): Action<SetGroupHomeworkListPayload> => ({
  type: id,
  payload: {
    groupHomeworkList
  }
})

setGroupHomeworkList.id = id
