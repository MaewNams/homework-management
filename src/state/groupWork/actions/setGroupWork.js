// @flow
import type {GroupWork} from '../../groupWork/types'
import type {Action} from '../../../state/types'

export type SetGroupWorkPayload = {
  groupWork: ?GroupWork
}

const id = 'groupWork/SET_GROUP_WORK'

export const setGroupWork = (groupWork: ?GroupWork): Action<SetGroupWorkPayload> => ({
  type: id,
  payload: {
    groupWork
  }
})

setGroupWork.id = id
