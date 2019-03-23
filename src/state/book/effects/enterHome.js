// @flow
import type {Quote} from '../types'
import type {Effect} from '../../types'
import type {TransitionSuccessAction} from '../../../router/types'

import {
  call,
  put,
  take
} from 'redux-saga/effects'
import {actionTypes as routerTypes} from 'redux-router5'

import {bookActions} from '../actions'
import {fetchQuoteList} from '../../../book/fetchQuoteList'


export function* enterHomeEffect(): Effect {
  while (true) {
    const transition: TransitionSuccessAction = yield take(routerTypes.TRANSITION_SUCCESS)
    if (transition.payload.route.name === 'home') {
      const quoteList: Array<Quote> = yield call(fetchQuoteList)
      yield put(bookActions.setQuoteList(quoteList))
    }
  }
}
