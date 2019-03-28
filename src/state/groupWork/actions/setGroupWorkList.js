// @flow
import type {GroupWork} from '../types'
import type {Action} from '../../../state/types'

export type SetGroupWorkListPayload = {
 groupWorkList: ?GroupWork[]
}

const id = 'groupWork/SET_GROUP_WORK_LIST'

export const setGroupWorkList = (groupWorkList: ?GroupWork[]): Action<SetGroupWorkListPayload> => ({
  type: id,
  payload: {
    groupWorkList
  }
})

setGroupWorkList.id = id
