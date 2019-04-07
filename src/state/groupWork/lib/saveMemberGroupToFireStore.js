// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export const saveMemberGroupToFirestore = async (groupId: string, status: string, user: User): Promise<any> => {
  const newMember = {
    [user.uid]: status
  }
 const snapshort = await db.collection('groupWorks').doc(groupId).get()
 const oldData = snapshort.data()
 const members = [...oldData.members, newMember]
 db.collection('groupWorks').doc(groupId).set({members: members}, {merge: true})

}

