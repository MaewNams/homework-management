// @flow

import type {Action} from '../../types'
import type {GroupworkState} from '../types'
import type {SetGroupWorkListPayload} from '../actions/setGroupWorkList'

export function setGroupWorkListReducer(state: GroupworkState, action: Action<SetGroupWorkListPayload>): GroupworkState {

  return {
    ...state,
    groupWorkList: action.payload.groupWorkList
  }
}
