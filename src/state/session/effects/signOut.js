// @flow

import type {Effect} from '../../types'

import {
  call,
  put,
  take,
} from 'redux-saga/effects'
import {actions} from 'redux-router5'

import {sessionActions} from '../actions'
import {signOut} from '../lib/signOut'

export function* signOutEffect(): Effect {
  // TODO: put your effect logic here
  while (true) {
    yield take(sessionActions.signOut.id)
    yield call(signOut)
    yield put(sessionActions.setUser(null))
    yield put(actions.navigateTo('sign-in'))
  }
}
