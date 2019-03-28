// @flow
import type {Homework} from '../../homework/types'

import {db} from '../../../firebase'

export async function fetchGroupHomeworkList(homeworkIds: string[]): Promise<?Homework[]> {
  const groupHomeworkList = []

  for (const id of homeworkIds) {
    const groupSnapShot = await db.collection('groupHomeworks').doc(id).get()
    const data = groupSnapShot.data()
    groupHomeworkList.push(data)
  }

  return groupHomeworkList
}
