// @flow
import type {User} from '../../session/types'
import type {Homework} from '../types'
import type {Effect} from '../../types'

import {
  call,
  put,
  select,
  take,
} from 'redux-saga/effects'
import {actions} from 'redux-router5'

import {homeworkActions} from '../actions'
import {sessionSelectors} from '../../session/selectors'
import {deleteHomework} from '../lib/deleteHomework'
import {fetchHomeworkList} from '../lib/fetchHomeworkList'

export function* deleteHomeworkEffect(): Effect {
  while (true) {
    const {payload: {homeworkId}} = yield take(homeworkActions.deleteHomework.id)
    const user: User = yield select(state => sessionSelectors.getUser(state))
    try {
      yield call(deleteHomework, user, homeworkId)
      const homeworkList: ?Homework[] = yield call(fetchHomeworkList, user)
      yield put(homeworkActions.setHomeworkList(homeworkList))
    }
    catch(error){
      console.log('error', error)
    }
  }
}
