// @flow
import type {Homework} from '../types'
import type {User} from '../../session/types'

import {db} from '../../../firebase'

export async function fetchGroupHomeworkList(user: User): Promise<?Homework[]> {
  const homeworkList = []
  //Need to know user group works
  const userGroupsnapShot = await db.collection('userGroupWork').doc(user.uid).get()
  const userGroupsData = userGroupsnapShot.data()
  const userGroupIds = userGroupsData.groupWork

  // Find group && work
  const homeworkIds = []
  for (const id of userGroupIds) {
    const snapShot = await db.collection('groupWorks').doc(id).get()
    const groupWorks = snapShot.data()
    homeworkIds.push( ...groupWorks.groupHomeworks)
  }

  const groupHomeworkList = []
  for (const id of homeworkIds) {
    const groupSnapShot = await db.collection('groupHomeworks').doc(id).get()
    const data = groupSnapShot.data()
    groupHomeworkList.push(data)
  }

  return groupHomeworkList
}
