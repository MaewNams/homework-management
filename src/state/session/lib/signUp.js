// @flow
import type {User} from '../types'

import {authen} from '../../../firebase'

export async function signUp(email: string, password: string): Promise<User> {
  return authen.createUserWithEmailAndPassword(
    email, password
  )
}
