// @flow
import type {Homework} from '../../state/homework/types'

import React, {Component } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import {DateTime} from 'luxon'

import "react-datepicker/dist/react-datepicker.css";

const FormContainer = styled.div`
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

  handleSelectDate = (date:any):void => {
    this.setState({
      submitDate: date ,
    })
  }

  handleChange = (e:any):void => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    
  }
    
  render() {
    const {} = this.props
    const values = this.state
    return (
      <FormContainer>
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

        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">สร้าง</button>
          </div>
          <div className="control">
            <button className="button is-text">ยกเลิก</button>
          </div> 
        </div>
      </FormContainer>
    )
  }
}

export default CreateHomework