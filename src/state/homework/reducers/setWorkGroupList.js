// @flow

import type {Action} from '../../types'
import type {HomeworkState} from '../types'
import type {SetWorkGroupListPayload} from '../actions/setWorkGroupList'

export function setWorkGroupListReducer(state: HomeworkState, action: Action<SetWorkGroupListPayload>): HomeworkState {

  return {
    ...state,
    workGroupList: action.payload.workGroupList
  }
}
