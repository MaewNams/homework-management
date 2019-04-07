// @flow
import type {GroupWork} from '../types'
import type {Homework} from '../../homework/types'
import type {Effect} from '../../types'

import {
  call,
  put,
  take,
} from 'redux-saga/effects'
import {actions} from 'redux-router5'

import {groupWorkActions} from '../actions'
import {fetchGroupHomeworkList} from '../lib/fetchGroupHomeworkList'
import {fetchGroupWork} from '../lib/fetchGroupWork'

export function* goToGroupWorkEffect(): Effect {
  while (true) {
    const {payload: {groupId}} = yield take(groupWorkActions.goToGroupWork.id)
    const groupHomeworkList: Homework[] = yield call(fetchGroupHomeworkList, groupId)
    const groupWork: GroupWork = yield call(fetchGroupWork, groupId)
    try {
      yield put (groupWorkActions.setGroupWork(groupWork))
      yield put(groupWorkActions.setGroupHomeworkList(groupHomeworkList))
      yield put(actions.navigateTo('group', {
        id: groupId
      }))
    }
    catch(error){
      console.log('error', error)
    }
  }
}
