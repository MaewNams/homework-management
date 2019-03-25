// @flow

import type {Effect} from '../../types'

import {
  call,
  take,
  put
} from 'redux-saga/effects'

import {sessionActions} from '../actions'
import {signIn} from '../lib/signIn'
import {getCurrentUser} from '../lib/getCurrentUser'

export function* signInEffect(): Effect {
  // TODO: put your effect logic here
  while (true) {
    const {payload: {username, password}} = yield take(sessionActions.signIn.id)
    try{
      yield call(signIn, username, password)
      const user = getCurrentUser
      if (user) {
        console.log('login success', user)
      } else {
        console.log('no user fuck you!')
      }
      // yield put(sessionActions.setSignInStatus({isError: false, isLoading: false, isSuccess: true, message: 'SignInSuccess'}))
      // yield put(routerActions.navigateTo('home.index'))
     }
    catch(error){
      console.log('error', error)
      // yield put(sessionActions.setSignInStatus({isError: true, isLoading: false,
      //   isSuccess: false, message: error.code}))
    }
  }
}
