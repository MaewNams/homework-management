// @flow
import type {Homework} from '../types'
import type {User} from '../../session/types'

import {db} from '../../../firebase'

export async function fetchHomeworkList(user: User): Promise<?Homework[]> {
  const homeworkList = []
  const snapShot = await db.collection('homeworks').where('owner', '==', user.uid).get()
  const homeworks = snapShot.docs.map((doc) => {
    return doc.data()
  })
  for (const id in homeworks) {
    homeworkList.push(homeworks[id])
  }

  return homeworkList
}
