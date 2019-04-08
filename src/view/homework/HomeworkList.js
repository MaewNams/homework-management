// @flow
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'

import HomeworkCard from './HomeworkCard'
import GroupHomeworkCard from './GroupHomeworkCard'

type Props = {
  homeWorkList: Homework[],
  deleteHomework: Function,
}

export class HomeworkList extends PureComponent<Props> {
  render() {
    const {homeWorkList, deleteHomework} = this.props
    return (
     <div className="">
        { homeWorkList && (
            homeWorkList.map((homework, i) => {
              const isIndividual = !!(homework.type === 'individual') 
              if (isIndividual) {
                return (
                  <HomeworkCard deleteHomework={deleteHomework} key={i} homework={homework} />
                )
              } else {
                return (
                  <GroupHomeworkCard key={i} homework={homework} />
                )
              }
            })
        )}
     </div>
    )
  }
}

export default HomeworkList
