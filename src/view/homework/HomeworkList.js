// @flow
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'

import HomeworkCard from './HomeworkCard'

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
              return (
                <HomeworkCard deleteHomework={deleteHomework} key={i} homework={homework} />
              )
            })
        )}
     </div>
    )
  }
}

export default HomeworkList
