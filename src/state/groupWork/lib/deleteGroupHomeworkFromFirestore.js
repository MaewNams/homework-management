// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export async function deleteGroupHomeworkFromFirestore(groupId: string, removeHomeworkId: string,): Promise<any> {
  const snapshort = await db.collection('groupWorks').doc(groupId).get()
  const oldHomeworks = snapshort.data()
  const homeworks = oldHomeworks.filter(homeworkId => homeworkId !== removeHomeworkId )
  db.collection('groupWorks').doc(groupId).set({groupHomeworks: homeworks}, {merge: true})

}

