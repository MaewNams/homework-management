// @flow
import type {Homework} from '../types'
import type {Effect} from '../../types'
import type {TransitionSuccessAction} from '../../../router/types'

import {
  call,
  put,
  take,
} from 'redux-saga/effects'
import {actionTypes as routerTypes} from 'redux-router5'

import {homeworkActions} from '../actions'
import {fetchHomeworkList} from '../lib/fetchHomeworkList'

export function* initEffect(): Effect {
  while (true) {
    const transition: TransitionSuccessAction = yield take(routerTypes.TRANSITION_SUCCESS)
    if (transition.payload.route.name === 'home') {
      const homeworkList: Homework[] = yield call(fetchHomeworkList)
      yield put(homeworkActions.setHomeworkList(homeworkList))
    }
  }
}
