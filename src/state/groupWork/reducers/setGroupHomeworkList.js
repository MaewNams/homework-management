// @flow

import type {Action} from '../../types'
import type {GroupworkState} from '../types'
import type {SetGroupHomeworkListPayload} from '../actions/setGroupHomeworkList'

export function setGroupHomeworkListReducer(state: GroupworkState, action: Action<SetGroupHomeworkListPayload>): GroupworkState {

  return {
    ...state,
  }
}
