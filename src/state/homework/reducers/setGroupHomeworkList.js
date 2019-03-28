// @flow

import type {Action} from '../../types'
import type {HomeworkState} from '../types'
import type {SetGroupHomeworkListPayload} from '../actions/setGroupHomeworkList'

export function setGroupHomeworkListReducer(state: HomeworkState, action: Action<SetGroupHomeworkListPayload>): HomeworkState {

  return {
    ...state,
    groupHomeworkList: action.payload.groupHomeworkList
  }
}
