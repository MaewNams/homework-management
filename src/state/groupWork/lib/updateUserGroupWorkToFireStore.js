// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export const updateUserGroupWorkToFirestore = async (groupId: string, user: User): Promise<any> => {
  const snapshort = await db.collection('userGroupWork').doc(user.uid).get()
  const oldData = snapshort.data()
  const userGroupWorks = [...oldData.groupWork, groupId]
  db.collection('userGroupWork').doc(user.uid).set({groupWork: userGroupWorks}, {merge: true})
}

