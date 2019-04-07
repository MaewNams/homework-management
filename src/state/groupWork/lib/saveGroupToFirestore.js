// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export const saveGroupToFirestore = async (id: string, name: string, detail: string, user: User): Promise<any> => {
  const groupWork = {
    id: id,
    owner: user.uid,
    members: [user.email],
    name: name,
    detail: detail,
    groupHomeworks: []
  }
 db.collection('groupWorks').doc(id).set(groupWork)

}

