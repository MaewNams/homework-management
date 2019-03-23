// @flow
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  padding-bottom: 1rem;
`
const BottomMenu = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 1rem;
  justify-content: center;
  padding-bottom: 1rem;
`
type Props = {
}

class HomeworkStatistic extends PureComponent<Props> {
  render() {
    const {} = this.props
    return (
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">งานค้างทั้งหมด</p>
            <p className="title">15</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">งานเดี่ยว</p>
            <p className="title">10</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">งานกลุ่ม</p>
            <p className="title">5</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default HomeworkStatistic