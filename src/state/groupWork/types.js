// @flow
import type {Homework} from '../homework/types'

export type GroupWork = {
  id: string,
  name: string,
  groupHomeworks: string[]
}

export type GroupworkState = {
  groupWorkList: ?GroupWork[],
  groupHomeworkList: ?Homework[],
}
