// @flow
import type {Homework} from '../../homework/types'
import type {Action} from '../../../state/types'

export type SetGroupHomeworkListPayload = {
  groupHomeworkList: ?Homework[]
}

const id = 'groupWork/SET_GROUP_HOMEWORK_LIST'

export const setGroupHomeworkList = (groupHomeworkList: ?Homework[]): Action<SetGroupHomeworkListPayload> => ({
  type: id,
  payload: {
    groupHomeworkList
  }
})

setGroupHomeworkList.id = id
