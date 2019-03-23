// @flow

import type {ApplicationState} from '../../types'
import type {
  BookState,
  Quote,
} from '../types'

export function getQuoteList(appState: ApplicationState): Array<Quote> {
  return _getQuoteList(appState.book)
}

function _getQuoteList(state: BookState): Array<Quote> {
  return state.quoteList
}

getQuoteList.internal = _getQuoteList
