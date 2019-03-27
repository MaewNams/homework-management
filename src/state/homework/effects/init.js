// @flow
import type {
  Homework,
  WorkGroup,
} from '../types'
import type {
  User,
} from '../../session/types'
import type {Effect} from '../../types'
import type {TransitionSuccessAction} from '../../../router/types'

import {
  call,
  put,
  select,
  take,
} from 'redux-saga/effects'
import {actionTypes as routerTypes} from 'redux-router5'

import {homeworkActions} from '../actions'
import {sessionSelectors} from '../../session/selectors'
import {fetchHomeworkList} from '../lib/fetchHomeworkList'
import {fetchWorkGroupList} from '../lib/fetchWorkGroupList'

export function* initEffect(): Effect {
  while (true) {
    const transition: TransitionSuccessAction = yield take(routerTypes.TRANSITION_SUCCESS)
    if (transition.payload.route.name === 'home') {
      const user: User = yield select(state => sessionSelectors.getUser(state))
      if (user) {
        const homeworkList: ?Homework[] = yield call(fetchHomeworkList, user)
        const workGroupList: ?WorkGroup[] = yield call(fetchWorkGroupList)
        yield put(homeworkActions.setHomeworkList(homeworkList))
        yield put(homeworkActions.setWorkGroupList(workGroupList))
      }
    }
  }
}
