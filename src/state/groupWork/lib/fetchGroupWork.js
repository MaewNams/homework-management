// @flow
import type {GroupWork} from '../types'

import {db} from '../../../firebase'

export async function fetchGroupHomeworkList(groupId: string): Promise<GroupWork> {

  const snapShot = await db.collection('groupWorks').doc(groupId).get()
  const groupWork = snapShot.data()

  return groupWork
}
