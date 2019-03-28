// @flow

export type GroupWork = {
  id: string,
  name: string,
  groupHomeworks: string[]
}

export type GroupworkState = {
  groupWorkList: ?GroupWork[],
}
