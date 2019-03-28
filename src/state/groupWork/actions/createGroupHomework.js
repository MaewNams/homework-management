// @flow
import type {Action} from '../../../state/types'

export type CreateGroupHomeworkPayload = {
  subject: string,
  detail: string,
  date: string,
}

const id = 'groupWork/CREATE_GROUP_HOMEWORK'

export const createGroupHomework = (subject: string, detail: string, date: string): Action<CreateGroupHomeworkPayload> => ({
  type: id,
  payload: {
    subject,
    detail,
    date,
  }
})

createGroupHomework.id = id
