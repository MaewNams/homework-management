// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export async function deleteHomework(user: User, homeworkId: string): Promise<any> {
    await db.collection('homeworks').doc(homeworkId).delete()
}

