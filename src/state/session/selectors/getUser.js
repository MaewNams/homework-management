// @flow
import type {ApplicationState} from '../../types'
import type {
  SessionState,
  User
} from '../types'

export function getUser(appState: ApplicationState): ?User {
  return _getUser(appState.session)
}

function _getUser(state: SessionState): ?User {
  return state.user
}

getUser.internal = _getUser
