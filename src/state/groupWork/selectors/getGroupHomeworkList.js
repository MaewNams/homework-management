// @flow

import type {ApplicationState} from '../../types'
import type {GroupworkState} from '../types'
import type {Homework} from '../../homework/types'

export function getGroupHomeworkList(appState: ApplicationState): ?Homework[] {
  return _getGroupHomeworkList(appState.groupWork)
}

function _getGroupHomeworkList(state: GroupworkState): ?Homework[] {
  return state.groupHomeworkList
}

getGroupHomeworkList.internal = _getGroupHomeworkList
