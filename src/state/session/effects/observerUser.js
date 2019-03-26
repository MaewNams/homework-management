// @flow
import type {User} from '../types'

import {eventChannel} from 'redux-saga'
import {authen} from '../../../firebase'

export type UserEvent = {
  user: ?User,
}

function createUserEvent(user: ?User = null): UserEvent {
  const userAccount = user ? {
    email: user.email,
    uid: user.uid,
  }: null
  return {
    user: userAccount,
  }
}

export function observerUser() {
  return eventChannel(emitter => {
    return authen.onAuthStateChanged((user: ?User) => {
      return emitter(createUserEvent(user))
    })
   }
  )
}
