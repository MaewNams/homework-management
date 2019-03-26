// @flow
import type {User} from '../types'

import {authen} from '../../../firebase'
import {getCurrentUser} from './getCurrentUser'

export async function signOut(): Promise<?User> {
  await authen.signOut()
  return getCurrentUser()
}
