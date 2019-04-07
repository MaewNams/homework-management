// @flow
import type {User} from '../../session/types'

import {
  firebaseRef as firebase,
  db,
} from '../../../firebase'

export const saveGroupToFirestore = async (id: string, name: string, detail: string, date: string, user: User): Promise<any> => {
  const owner = {
    uid: '0Wb9USVtIpX7L7cptj0vYoUh68C2',
    level: 'owner'
  }
  const homework = {
    id: id,
    members: {owner},
    name: name,
    detail: detail,
  }
 db.collection('groupWorks').doc(id).set(homework)

}

