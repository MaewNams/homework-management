// @flow
import type {Homework} from '../../homework/types'

import {db} from '../../../firebase'

export async function fetchGroupHomeworkList(groupId: string): Promise<?Homework[]> {
  const groupHomeworkList = []

  const snapShot = await db.collection('groupWorks').doc(groupId).get()
  const groupWorks = snapShot.data()
  const homeworkIds = [...groupWorks.groupHomeworks]

  for (const id of homeworkIds) {
    const groupSnapShot = await db.collection('groupHomeworks').doc(id).get()
    const data = groupSnapShot.data()
    groupHomeworkList.push(data)
  }

  return groupHomeworkList
}
