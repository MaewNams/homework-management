// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export async function saveGroupHomeworkToFirestore(groupId: string, id: string, subject: string, detail: string, date: string, user: User): Promise<any> {
  const homework = {
    id: id,
    owner: user.uid,
    subject: subject,
    detail: detail,
    date: date,
    status: 'ยังไม่เสร็จ'
  }
  db.collection('groupHomeworks').doc(id).set(homework)
  const snapshort = await db.collection('groupWorks').doc(groupId).get()
  const oldHomeworks = snapshort.data()
  const homeworks = [...oldHomeworks.groupHomeworks, id]
  db.collection('groupWorks').doc(groupId).set({groupHomeworks: homeworks}, {merge: true})

}

