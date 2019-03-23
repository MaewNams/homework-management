// @flow

export type Homework = {
  id: string,
  subject: string,
  detail: string,
  date: string,
  status: string,
}

export type WorkGroup = {
  id: string,
  name: string,
  workLeft: number,
}

export type HomeworkState = {
  homeworkList: ?Homework[],
  workGroupList: ? WorkGroup[]
}
