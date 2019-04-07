// @flow

import type {Action} from '../../types'
import type {GroupworkState} from '../types'
import type {SetGroupWorkPayload} from '../actions/setGroupWork'

export function setGroupWorkReducer(state: GroupworkState, action: Action<SetGroupWorkPayload>): GroupworkState {

  return {
    ...state,
    groupWork: action.payload.groupWork,
  }
}
