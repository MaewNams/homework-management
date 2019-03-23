// @flow

import type {Action} from '../../types'
import type {BookState} from '../types'
import type {SetQuoteListPayload} from '../actions/setQuoteList'

export function setQuoteListReducer(state: BookState, action: Action<SetQuoteListPayload>): BookState {

  return {
    ...state,
    quoteList: action.payload.quoteList
  }
}
