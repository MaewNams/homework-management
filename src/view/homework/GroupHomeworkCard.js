// @flow
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  padding-bottom: 1rem;
`
const WorkTag = styled.span`
  margin-right: 0.5rem;
`
const BottomMenu = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 1rem;
  justify-content: center;
  padding-bottom: 1rem;
`
type Props = {
  homework: Homework,
}

class GroupHomeworkCard extends PureComponent<Props> {

  render() {
    const {homework} = this.props
    return (
      <CardContainer>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <WorkTag className="tag is-link">งานกลุ่ม</WorkTag>
              กำหนดส่ง: {homework.date}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              {homework.subject}
              <br />
              รายละเอียด: {homework.detail}
              <br />
            </div>
          </div>
        </div>
      </CardContainer>
    )
  }
}

export default GroupHomeworkCard