// @flow
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

export function* goToGroupWorkEffect(): Effect {
  while (true) {
    const {payload: {groupId}} = yield take(groupWorkActions.goToGroupWork.id)
    const groupHomeworkList: Homework[] = yield call(fetchGroupHomeworkList, groupId)
    try {
      yield put(groupWorkActions.setGroupHomeworkList(groupHomeworkList))
      yield put(actions.navigateTo('group', {
        groupId: groupId
      }))
    }
    catch(error){
      console.log('error', error)
    }
  }
}
