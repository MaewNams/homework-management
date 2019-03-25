// @flow

import type {Action} from '../../types'
import type {SessionState} from '../types'
import type {SetUserPayload} from '../actions/setUser'

export function setUserReducer(state: SessionState, action: Action<SetUserPayload>): SessionState {

  return {
    ...state,
  }
}
