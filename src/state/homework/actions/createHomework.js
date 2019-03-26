// @flow
import type {Action} from '../../../state/types'

export type CreateHomeworkPayload = {
  subject: string,
  detail: string,
  date: string,
}

const id = 'homework/CREATE_HOMEWORK'

export const createHomework = (subject: string, detail: string, date: string): Action<CreateHomeworkPayload> => ({
  type: id,
  payload: {
    subject,
    detail,
    date,
  }
})

createHomework.id = id
