// @flow
import type {Homework} from '../types'

const work1: Homework = {
  subject: 'คณิตศาสตร์',
  detail: 'โจทย์หน้า 1 ข้อ 1.1-1.5',
  date: '22/03/19',
  status: 'onGoing',
}

const work2: Homework = {
  subject: 'ภาษาอังกฤษ',
  detail: 'หน้า 23-25 ทุกข้อ',
  date: '24/03/19',
  status: 'onGoing',
}

//Now we mock data 
export const fetchHomeworkList = (): Homework[] => {
  const homeworkList = [work1, work2]
  return homeworkList
}