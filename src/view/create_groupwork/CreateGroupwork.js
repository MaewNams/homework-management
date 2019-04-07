// @flow
import type {ApplicationState} from '../../state/types'
import type {Homework} from '../../state/homework/types'

import React, {Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {actions} from 'redux-router5'
import "react-datepicker/dist/react-datepicker.css"

import {groupWorkActions} from '../../state/groupWork/actions'

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
 createGroup: Function,
 navigateTo: Function,
}

type State = {
  name: string,
  detail: string,
}

class CreateGroupWork extends Component<Props, State> {

  state = {
    name: '',
    detail: '',
  }

  handleChange = (e: any):void => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleCreateHomework = (e: any):void => {
    e.preventDefault()
    const {name, detail} = this.state
    const {createGroup} = this.props 
    createGroup(name, detail)
  }
    
  render() {
    const {navigateTo} = this.props
    const values = this.state
    return (
      <Container className="container is-fluid">

        <div className="field">
          <label className="label">ชื่อกลุ่ม</label>
          <div className="control">
            <input className="input" type="text" 
            name="name" placeholder="Text input" 
            value={values.name} 
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
  createGroup: groupWorkActions.createGroup,
  navigateTo: actions.navigateTo
})

export default withStore(CreateGroupWork)
