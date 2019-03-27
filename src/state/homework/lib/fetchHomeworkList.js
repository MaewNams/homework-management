// @flow
import type {Homework} from '../types'
import type {User} from '../../session/types'

import {db} from '../../../firebase'

export async function fetchHomeworkList(user: User): Promise<?Homework[]> {
  const snapShot = await db.collection('homeworks').doc(user.uid).get()
  if (snapShot.exists) {
    return snapShot.data()
  } 
  return null
}
