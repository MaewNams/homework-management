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
  homework: Homework,
  deleteHomework: Function,
}

class GroupHomeworkCard extends PureComponent<Props> {

  handleDelete = (e:any):void => {
    e.preventDefault()
    console.log('in handleDelete')
    // const {deleteHomework, homework} = this.props
    // deleteHomework(homework.id)
  }

  render() {
    const {homework} = this.props
    return (
      <CardContainer>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              กำหนดส่ง: {homework.date}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              วิชา: {homework.subject}
              <br />
              รายละเอียด: {homework.detail}
              <br />
            </div>
          </div>
          <BottomMenu>
            <a className="button is-primary">Done</a>
            <a onClick={this.handleDelete} className="button is-danger">Delete</a>
          </BottomMenu>
        </div>
      </CardContainer>
    )
  }
}

export default GroupHomeworkCard