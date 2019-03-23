// @flow

import type {ApplicationState} from '../../types'
import type {Homework} from '../types'

export function getHomeworkList(appState: ApplicationState): ?Homework[] {
  return _getHomeworkList(appState.homework)
}

function _getHomeworkList(state: HomeworkState): ?Homework {
  return state.homeworkList
}

getHomeworkList.internal = _getHomeworkList
