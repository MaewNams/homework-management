// @flow

export type HomeWork = {
  subject: string,
  detail: string,
  date: string,
  status: string,
}

export type HomeworkState = {
  homeworkList: Array<HomeWork>
}
