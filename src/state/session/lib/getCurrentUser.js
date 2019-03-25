// @flow
import {authen} from '../../../firebase'
import type {User} from '../../types'

export function getCurrentUser() :?User {
  if (authen.currentUser) {
    return {
      email: authen.currentUser.email,
      uid: authen.currentUser.uid,
    }
  } else {
    return null
  }
}
