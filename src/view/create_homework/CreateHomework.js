// @flow
import type {ApplicationState} from '../../state/types'
import type {Homework} from '../../state/homework/types'

import React, {Component } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import {connect} from 'react-redux'
import {actions} from 'redux-router5'
import "react-datepicker/dist/react-datepicker.css"

import {homeworkActions} from '../../state/homework/actions'

const Container = styled.div`
  padding: 1rem;
`
const BottomMenu = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 1rem;
  justify-content: center;
  padding-bottom: 1rem;
`
type Props = {
 createHomeWork: Function,
 navigateTo: Function,
}

type State = {
  detail: string,
  subject: string,
  submitDate: any,
}

class CreateHomework extends Component<Props, State> {

  state = {
    detail: '',
    subject: '',
    submitDate: new Date(),
  }

  handleSelectDate = (date: any):void => {
    this.setState({
      submitDate: date ,
    })
  }

  handleChange = (e: any):void => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleCreateHomework = (e: any):void => {
    e.preventDefault()
    const {subject, detail, submitDate} = this.state
    const {createHomeWork} = this.props 
    const date = moment(submitDate).locale('th').format("D MMMM YYYY")
    createHomeWork(subject, detail, date)
  }
    
  render() {
    const {navigateTo} = this.props
    const values = this.state
    return (
      <Container className="container is-fluid">
        <div className="field">
          <label className="label">กำหนดส่ง</label>
          <div className="control">
            <DatePicker className="input"
              selected={this.state.submitDate}
              onChange={this.handleSelectDate}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">วิชา</label>
          <div className="control">
            <input className="input" type="text" 
            name="subject" placeholder="Text input" 
            value={values.subject} 
            onChange= {this.handleChange}
          />
          </div>
        </div>

        <div className="field">
          <label className="label">รายละเอียด</label>
          <div className="control">
            <textarea className="textarea" 
            placeholder="Textarea" 
            name="detail"
            value={values.detail}
            onChange={this.handleChange}
          >
          </textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button onClick={this.handleCreateHomework} className="button is-primary">สร้าง</button>
          </div>
          <div className="control">
            <button onClick={() => navigateTo('home')} className="button is-text">ยกเลิก</button>
          </div> 
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state: ApplicationState, props: Props) => {
  return {
   
  }
}

const withStore = connect(mapStateToProps, {
  createHomeWork: homeworkActions.createHomework,
  navigateTo: actions.navigateTo
})

export default withStore(CreateHomework)
