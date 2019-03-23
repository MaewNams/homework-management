// @flow
import type {Quote} from '../types'
import type {Action} from '../../../state/types'

export type SetQuoteListPayload = {
  quoteList: Array<Quote>
}

const id = 'book/SET_QUOTE_LIST'

export const setQuoteList = (quoteList: Array<Quote>): Action<SetQuoteListPayload> => ({
  type: id,
  payload: {
    quoteList
  }
})

setQuoteList.id = id
