// @flow
import type {Action} from '../../../state/types'
import type {WorkGroup} from '../types'

export type SetWorkGroupListPayload = {
  workGroupList: ?WorkGroup[]
}

const id = 'homework/SET_WORK_GROUP_LIST'

export const setWorkGroupList = (workGroupList: ?WorkGroup[]): Action<SetWorkGroupListPayload> => ({
  type: id,
  payload: {
    workGroupList
  }
})

setWorkGroupList.id = id
