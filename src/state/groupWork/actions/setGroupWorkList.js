// @flow
import type {Action} from '../../../state/types'

export type SetGroupWorkListPayload = {
  // TODO: Add payload content
}

const id = 'groupWork/SET_GROUP_WORK_LIST'

export const setGroupWorkList = (): Action<SetGroupWorkListPayload> => ({
  type: id,
  payload: {
    // TODO: Add payload content
  }
})

setGroupWorkList.id = id
