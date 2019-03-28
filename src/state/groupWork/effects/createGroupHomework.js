// @flow
import type {User} from '../../session/types'
import type {Effect} from '../../types'

import {
  call,
  put,
  select,
  take,
} from 'redux-saga/effects'
import {actions} from 'redux-router5'

import {groupWorkActions} from '../actions'
import {sessionSelectors} from '../../session/selectors'
import {saveGroupHomeworkToFireStore} from '../lib/saveGroupHomeworkToFireStore'
import {generateHomeworkId} from '../../homework/lib/generateHomeworkId'

export function* createGroupHomeworkEffect(): Effect {
  while (true) {
    const {payload: {groupId, subject, detail, date}} = yield take(groupWorkActions.createGroupHomework.id)
    const user: User = yield select(state => sessionSelectors.getUser(state))
    const homeworkId: string = yield call(generateHomeworkId)
    try {
      yield call(saveGroupHomeworkToFireStore,groupId, homeworkId, subject, detail, date, user)
      yield put(actions.navigateTo('group', {
        id: groupId
      }))
    }
    catch(error){
      console.log('error', error)
    }
  }
}
