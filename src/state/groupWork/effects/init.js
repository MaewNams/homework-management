// @flow
import type {User} from '../../session/types'
import type {Homework} from '../../homework/types'
import type {Effect} from '../../types'
import type {TransitionSuccessAction} from '../../../router/types'

import {
  call,
  put,
  select,
  take,
} from 'redux-saga/effects'
import {actions} from 'redux-router5'
import {actionTypes as routerTypes} from 'redux-router5'

import {groupWorkActions} from '../actions'
import {fetchGroupHomeworkList} from '../lib/fetchGroupHomeworkList'
import {fetchGroupWorkList} from '../lib/fetchGroupWorkList'
import {sessionSelectors} from '../../session/selectors'

export function* initEffect(): Effect {
  while (true) {
    const transition: TransitionSuccessAction = yield take(routerTypes.TRANSITION_SUCCESS)
    if (transition.payload.route.name === 'group') {
      const groupId  = transition.payload.route.params.id
      const groupHomeworkList: Homework[] = yield call(fetchGroupHomeworkList, groupId)
      const user: User = yield select(state => sessionSelectors.getUser(state))
      const workGroupList = yield call(fetchGroupWorkList, user)
      yield put(groupWorkActions.setGroupHomeworkList(groupHomeworkList))
      yield put(groupWorkActions.setGroupWorkList(workGroupList))

    }
  }
}
