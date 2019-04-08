// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export const saveMemberGroupToFirestore = async (groupId: string, user: User): Promise<any> => {
 const snapshort = await db.collection('groupWorks').doc(groupId).get()
 const oldData = snapshort.data()
 const members = [...oldData.members, user.email]
 db.collection('groupWorks').doc(groupId).set({members: members}, {merge: true})

}

