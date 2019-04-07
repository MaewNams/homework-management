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
import {saveGroupToFirestore} from '../lib/saveGroupToFirestore'
import {saveMemberGroupToFirestore} from '../lib/saveMemberGroupToFirestore'
import {updateUserGroupWorkToFirestore} from '../lib/updateUserGroupWorkToFirestore'
import {generateHomeworkId} from '../../homework/lib/generateHomeworkId'

export function* createGroupEffect(): Effect {
  while (true) {
    const {payload: {name, detail}} = yield take(groupWorkActions.createGroup.id)
    const user: User = yield select(state => sessionSelectors.getUser(state))
    const groupId: string = yield call(generateHomeworkId)
    try {
      yield call(saveGroupToFirestore,groupId, name, detail, user)
      yield call (updateUserGroupWorkToFirestore, groupId, user)
      yield put(actions.navigateTo('home'))
    }
    catch(error){
      console.log('error', error)
    }
  }
}
