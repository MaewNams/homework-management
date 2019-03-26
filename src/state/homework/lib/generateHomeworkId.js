// @flow
import {db} from '../../../firebase'

export const generateHomeworkId = ():string => {
  return db.collection('homeworks').doc().id
}