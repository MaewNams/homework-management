// @flow

import type {ApplicationState} from '../../types'
import type {
  GroupWork,
  GroupworkState,
} from '../types'

export function getGroupWorkList(appState: ApplicationState): ?GroupWork[] {
  return _getGroupWorkList(appState.groupWork)
}

function _getGroupWorkList(state: GroupworkState): ?GroupWork[] {
  return state.groupWorkList
}

getGroupWorkList.internal = _getGroupWorkList
