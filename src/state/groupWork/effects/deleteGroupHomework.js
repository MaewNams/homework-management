// @flow
import type {User} from '../../session/types'
import type {Homework} from '../../Homework/types'
import type {Effect} from '../../types'

import {
  call,
  put,
  select,
  take,
} from 'redux-saga/effects'
import {actions} from 'redux-router5'

import {groupWorkActions} from '../actions'
import {groupWorkSelectors} from '../selectors'
import {deleteGroupHomework} from '../lib/deleteGroupHomework'
import {deleteGroupHomeworkFromFirestore} from '../lib/deleteGroupHomeworkFromFirestore'

export function* deleteGroupHomeworkEffect(): Effect {
  while (true) {
    const {payload: {homeworkId}} = yield take(groupWorkActions.deleteGroupHomework.id)
    try {
      const groupWork = yield select(state => groupWorkSelectors.getGroupWork(state))
      yield call(deleteGroupHomework, homeworkId)
      yield call(deleteGroupHomeworkFromFirestore, groupWork.id, homeworkId)
      const oldHomeworks = yield select(state => groupWorkSelectors.getGroupHomeworkList(state))
      const newHomeworks = oldHomeworks.filter(homework => homework.id !== homeworkId)
      yield put(groupWorkActions.setGroupHomeworkList(newHomeworks))
    }
    catch(error){
      console.log('error', error)
    }
  }
}
