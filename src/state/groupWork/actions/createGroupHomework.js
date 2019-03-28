// @flow
import type {Action} from '../../../state/types'

export type CreateGroupHomeworkPayload = {
  groupId: string,
  subject: string,
  detail: string,
  date: string,
}

const id = 'groupWork/CREATE_GROUP_HOMEWORK'

export const createGroupHomework = (groupId: string, subject: string, detail: string, date: string): Action<CreateGroupHomeworkPayload> => ({
  type: id,
  payload: {
    groupId,
    subject,
    detail,
    date,
  }
})

createGroupHomework.id = id
