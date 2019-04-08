// @flow
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'

import GroupHomeworkCard from './GroupHomeworkCard'

type Props = {
  homeWorkList: Homework[],
  deleteHomework: Function,
  isOwner: boolean,
}

export class GroupHomeworkList extends PureComponent<Props> {
  render() {
    const {homeWorkList, deleteHomework, isOwner} = this.props
    return (
     <div className="">
        { homeWorkList && (
            homeWorkList.map((homework, i) => {
              return (
                <GroupHomeworkCard 
                  key={i} 
                  deleteHomework={deleteHomework}
                  homework={homework} 
                  isOwner={isOwner}
                />
              )
            })
        )}
     </div>
    )
  }
}

export default GroupHomeworkList
