// @flow

import type {Effect} from '../../types'

import {
  call,
  take,
  put
} from 'redux-saga/effects'
import {actions} from 'redux-router5'

import {sessionActions} from '../actions'
import {signIn} from '../lib/signIn'
import {getCurrentUser} from '../lib/getCurrentUser'

export function* signInEffect(): Effect {
  // TODO: put your effect logic here
  while (true) {
    const {payload: {email, password}} = yield take(sessionActions.signIn.id)
    try{
      yield call(signIn, email, password)
      const user = yield call(getCurrentUser)
      if (user) {
        yield put(sessionActions.setUser(user))
        yield put(actions.navigateTo('home'))
      } else {
        console.log('some critical problem happen!')
      }
     }
    catch(error){
      //Cant log in
      console.log('error', error)
    }
  }
}
