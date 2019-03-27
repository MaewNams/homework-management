// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export const saveHomeworkToFireStore = async (id: string, subject: string, detail: string, date: string, user: User): Promise<any> => {
  const homework = {
    id: id,
    subject: subject,
    detail: detail,
    date: date,
    status: 'ยังไม่เสร็จ'
  }
 db.collection('homeworks').doc(user.uid).set({
    [id]: homework
  }, {merge: true})

}

