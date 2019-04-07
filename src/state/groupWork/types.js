// @flow
import type {Homework} from '../homework/types'

export type GroupWork = {
  id: string,
  name: string,
  detail: string,
  groupHomeworks: string[],
  members: string[],
}

export type GroupworkState = {
  groupWork: ?GroupWork,
  groupWorkList: ?GroupWork[],
  groupHomeworkList: ?Homework[],
}
