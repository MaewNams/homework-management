// Auto-generated by the generator
// Don't manually edit this file

// @flow

import type {Action} from '../../types'
import type {BookState} from '../types'

import {setQuoteListReducer} from './setQuoteList'
import {initialState} from './initialState'

export const bookReducer = (state: BookState = initialState, action: Action<any>): BookState => {
  switch (action.type) {
    case 'book/SET_QUOTE_LIST':
      return setQuoteListReducer(state, action)
    default:
      return state
  }
}
