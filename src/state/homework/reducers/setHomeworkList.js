// @flow

import type {Action} from '../../types'
import type {HomeworkState} from '../types'
import type {SetHomeworkListPayload} from '../actions/setHomeworkList'

export function setHomeworkListReducer(state: HomeworkState, action: Action<SetHomeworkListPayload>): HomeworkState {

  return {
    ...state,
    homeworkList: action.payload.homeworkList
  }
}
