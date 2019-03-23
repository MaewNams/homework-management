// @flow
import type {WorkGroup} from '../types'

const group1: WorkGroup = {
  id: 'AA',
  name: 'กลุ่มคณิตศาสตร์อาจารย์กนก',
  workLeft: 1,
}

const group2: WorkGroup = {
  id: 'BB',
  name: 'ห้อง 4/4',
  workLeft: 2,
}

//Now we mock data 
export const fetchWorkGroupList = (): WorkGroup[] => {
  const workGroupList = [group1, group2]
  return workGroupList
}