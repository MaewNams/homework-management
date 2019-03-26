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

import {homeworkActions} from '../actions'
import {sessionSelectors} from '../../session/selectors'
import {saveHomeworkToFireStore} from '../lib/saveHomeworkToFireStore'
import {generateHomeworkId} from '../lib/generateHomeworkId'

export function* createHomeworkEffect(): Effect {
  while (true) {
    const {payload: {subject, detail, date}} = yield take(homeworkActions.createHomework.id)
    const user: User = yield select(state => sessionSelectors.getUser(state))
    const homeworkId: string = yield call(generateHomeworkId)
    try {
      yield call(saveHomeworkToFireStore, homeworkId, subject, detail, date, user)
      yield put(actions.navigateTo('home'))
    }
    catch(error){
      console.log('error', error)
    }
  }
}
