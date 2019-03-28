// @flow

import type {ApplicationState} from '../../types'
import type {
  Homework,
  HomeworkState
} from '../types'

export function getGroupHomeworkList(appState: ApplicationState): ?Homework[] {
  return _getGroupHomeworkList(appState.homework)
}

function _getGroupHomeworkList(state: HomeworkState): ?Homework[] {
  return state.groupHomeworkList
}

getGroupHomeworkList.internal = _getGroupHomeworkList
