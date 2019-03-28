// @flow
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'

import GroupHomeworkCard from './GroupHomeworkCard'

type Props = {
  homeWorkList: Homework[],
  deleteHomework: Function,
}

export class GroupHomeworkList extends PureComponent<Props> {
  render() {
    const {homeWorkList, deleteHomework} = this.props
    return (
     <div className="">
        { homeWorkList && (
            homeWorkList.map((homework, i) => {
              return (
                <GroupHomeworkCard deleteHomework={deleteHomework} key={i} homework={homework} />
              )
            })
        )}
     </div>
    )
  }
}

export default GroupHomeworkList
