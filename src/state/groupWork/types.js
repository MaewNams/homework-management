// @flow
import type {Homework} from '../homework/types'

export type GroupWork = {
  id: string,
  name: string,
  detail: string,
  groupHomeworks: string[],
  members: [],
}

export type GroupworkState = {
  groupWorkList: ?GroupWork[],
  groupHomeworkList: ?Homework[],
}
