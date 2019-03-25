// @flow

import type {Effect} from '../../types'

import {
  call,
  take,
  put
} from 'redux-saga/effects'

import {sessionActions} from '../actions'
import {signUp} from '../lib/signUp'
import {signIn} from '../lib/signIn'
import {getCurrentUser} from '../lib/getCurrentUser'

export function* signUpEffect(): Effect {
  // TODO: put your effect logic here
  while (true) {
    const {payload: {email, password}} = yield take(sessionActions.signUp.id)
    try{
      yield call(signUp, email, password)
      yield call(signIn, email, password)
      const user = getCurrentUser
      console.log('user', user)
     }
    catch(error){
      console.log('error', error)
    }
  }
}
