// @flow
import type {GroupWork} from '../types'
import type {User} from '../../session/types'

import {db} from '../../../firebase'

export async function fetchGroupWorkList(user: User): Promise<?GroupWork[]> {
  const groupWorkList = []
  const snapShot = await db.collection('userGroupWork').doc(user.uid).get()
  const groupWorks = snapShot.data()

  for (const groupWorkId of groupWorks.groupWork) {
    const groupSnapShot = await db.collection('groupWorks').doc(groupWorkId).get()
    const data = groupSnapShot.data()
    groupWorkList.push(data)
  }

  return groupWorkList
}
