// @flow

export type GroupWork = {
  id: string,
  name: string,
  homeworks: string[]
}

export type GroupworkState = {
  groupWorkList: ?GroupWork[],
}
