// @flow

import type {ApplicationState} from '../../types'
import type {
  HomeworkState,
  WorkGroup
} from '../types'

export function getWorkGroupList(appState: ApplicationState): ?WorkGroup[] {
  return _getWorkGroupList(appState.homework)
}

function _getWorkGroupList(state: HomeworkState): ?WorkGroup[] {
  return state.workGroupList
}

getWorkGroupList.internal = _getWorkGroupList
