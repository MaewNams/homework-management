// @flow
import type {Action} from '../../../state/types'

export type SetWorkGroupListPayload = {
  // TODO: Add payload content
}

const id = 'homework/SET_WORK_GROUP_LIST'

export const setWorkGroupList = (): Action<SetWorkGroupListPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

setWorkGroupList.id = id
