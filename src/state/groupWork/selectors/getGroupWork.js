// @flow
import type {ApplicationState} from '../../types'
import type {
  GroupWork,
  GroupworkState
} from '../types'

export function getGroupWork(appState: ApplicationState): ?GroupWork {
  return _getGroupWork(appState.groupWork)
}

function _getGroupWork(state: GroupworkState, groupId): ?GroupWork {
  return state.groupWork
}
