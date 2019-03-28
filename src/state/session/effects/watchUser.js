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
import {fetchGroupHomeworkList} from '../../homework/lib/fetchGroupHomeworkList'
import {fetchGroupWorkList} from '../../groupWork/lib/fetchGroupWorkList'
import {homeworkActions} from '../../homework/actions'
import {groupWorkActions} from '../../groupWork/actions'

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
        const groupHomeWorkList = yield call(fetchGroupHomeworkList, user)
        const groupList = yield call(fetchGroupWorkList, user)
        yield put(homeworkActions.setHomeworkList(homeworkList))
        yield put(homeworkActions.setGroupHomeworkList(groupHomeWorkList))
        yield put(groupWorkActions.setGroupWorkList(groupList))
      }
    }
}
