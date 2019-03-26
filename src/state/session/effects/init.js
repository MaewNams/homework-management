// @flow

import type {User} from '../types'
import type {Effect} from '../../types'
import type {TransitionSuccessAction} from '../../../router/types'

import {
  call,
  put,
  take,
} from 'redux-saga/effects'
import {actions} from 'redux-router5'
import {actionTypes as routerTypes} from 'redux-router5'

import {getCurrentUser} from '../lib/getCurrentUser'

export function* initEffect(): Effect {
  while (true) {
    const transition: TransitionSuccessAction = yield take(routerTypes.TRANSITION_SUCCESS)
    if (transition.payload.route.name === 'init') { 
      const user: ?User = yield call(getCurrentUser)
      if (!user) {
        yield put(actions.navigateTo('sign-up'))
      } else {
        yield put(actions.navigateTo('home'))
      }
    }
    
  }
}
