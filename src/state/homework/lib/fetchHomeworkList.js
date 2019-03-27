// @flow
import type {Homework} from '../types'
import type {User} from '../../session/types'

import {db} from '../../../firebase'

export async function fetchHomeworkList(user: User): Promise<?Homework[]> {
  const snapShot = await db.collection('homeworks').doc(user.uid).get()
  const homeworkList = []
  if (snapShot.exists) {
    const data =  snapShot.data()
    for (const id in data) {
      homeworkList.push(data[id])
    }
  } 
  return homeworkList
}
