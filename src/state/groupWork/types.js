// @flow
import type {Homework} from '../homework/types'

export type GroupWork = {
  id: string,
  detail: string,
  groupHomeworks: string[],
  members: string[],
  name: string,
  owner: string,
}

export type GroupworkState = {
  groupWork: ?GroupWork,
  groupWorkList: ?GroupWork[],
  groupHomeworkList: ?Homework[],
}
