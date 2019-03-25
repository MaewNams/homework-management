// @flow
import type {User} from '../types'

import {authen} from '../../../firebase'
import {getCurrentUser} from './getCurrentUser'

export async function signIn(username: string, password: string): Promise<?User> {
  await authen.signInWithEmailAndPassword(username, password)
  return getCurrentUser()
}
