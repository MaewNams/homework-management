// @flow
import type {User} from '../types'

import {authen} from '../../../firebase'

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
