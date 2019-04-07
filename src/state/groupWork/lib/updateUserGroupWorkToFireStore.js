// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export const updateUserGroupWorkToFireStore = async (groupId: string, user: User): Promise<any> => {
  const snapshort = await db.collection('userGroupWorks').doc(user.uid).get()
  const oldData = snapshort.data()
  const userGroupWorks = [...oldData.Work, groupId]
  db.collection('userGroupWorks').doc(user.uid).set({groupWork: userGroupWorks}, {merge: true})
 

}

