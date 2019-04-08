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
  deleteHomework: Function,
}

class HomeworkCard extends PureComponent<Props> {

  handleDelete = (e:any):void => {
    e.preventDefault()
    const {deleteHomework, homework} = this.props
    deleteHomework(homework.id)
  }

  render() {
    const {homework} = this.props
    return (
      <CardContainer>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <WorkTag className="tag is-primary">งานเดี่ยว</WorkTag>
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
            <a onClick={(e) => this.handleDelete(e)} className="button is-danger">Delete</a>
          </BottomMenu>
        </div>
      </CardContainer>
    )
  }
}

export default HomeworkCard