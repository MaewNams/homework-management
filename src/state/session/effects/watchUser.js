// @flow

import type {Effect} from '../../types'
import type {UserEvent} from './observerUser'

import {
  call,
  put,
  take,
} from 'redux-saga/effects'
import {actions} from 'redux-router5'

import {observerUser} from './observerUser'
import {sessionActions} from '../actions'
import {fetchHomeworkList} from '../../homework/lib/fetchHomeworkList'
import {homeworkActions} from '../../homework/actions'

export function* watchUserEffect(): Effect {
  const channel = yield call(observerUser)
    while (true) {
      const {user}: UserEvent = yield take(channel)
      if (!user) {
        yield put(actions.navigateTo('sign-in'))
        yield put(sessionActions.setUser(null))
      } else {
        yield put(sessionActions.setUser(user))
        const homeworkList = yield call(fetchHomeworkList, user)
        yield put(homeworkActions.setHomeworkList(homeworkList))
      }
    }
}
