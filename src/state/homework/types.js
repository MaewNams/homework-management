// @flow

export type Homework = {
  subject: string,
  detail: string,
  date: string,
  status: string,
}

export type HomeworkState = {
  homeworkList: Array<Homework>
}
