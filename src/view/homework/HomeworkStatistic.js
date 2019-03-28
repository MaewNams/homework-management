// @flow
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'

type Props = {
  allWorksAmount: number,
  groupWorkAmount: number,
  myWorkAmount: number
}

class HomeworkStatistic extends PureComponent<Props> {
  render() {
    const {allWorksAmount, groupWorkAmount, myWorkAmount} = this.props
    return (
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">งานค้างทั้งหมด</p>
            <p className="title">{allWorksAmount}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">งานเดี่ยว</p>
            <p className="title">{myWorkAmount}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">งานกลุ่ม</p>
            <p className="title">{groupWorkAmount}</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default HomeworkStatistic