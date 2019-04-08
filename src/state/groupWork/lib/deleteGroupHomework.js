// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export async function deleteGroupHomework(homeworkId: string): Promise<any> {
    await db.collection('groupHomeworks').doc(homeworkId).delete()
}

