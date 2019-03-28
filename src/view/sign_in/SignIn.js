// @flow
import type {ApplicationState} from '../../state/types'

import React, {Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {actions} from 'redux-router5'

import {sessionActions} from '../../state/session/actions'

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
  signIn: Function,
  navigateTo: Function,
}

type State = {
  email: string,
  password: string,
}

class SignIn extends Component<Props, State> {

  state = {
    email: '',
    password: '',
  }

  handleChange = (e:any):void => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    
  }

  handleSignIn = (e:any):void => {
    e.preventDefault()
    const {signIn} = this.props
    const {email, password} = this.state
    signIn(email, password)
  }
    
  render() {
    const {navigateTo} = this.props
    const values = this.state
    return (
      <FormContainer className="container is-fluid">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" 
              type="email" name="email"
              onChange={this.handleChange}
              placeholder="Email input" value={values.email}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" 
            name="password" placeholder="******" 
            value={values.password} 
            onChange= {this.handleChange}
          />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button onClick={this.handleSignIn} className="button is-primary">เข้าสู่ระบบ</button>
          </div>
          <div className="control">
            <button onClick={() => navigateTo('sign-up')} className="button is-primary">สมัครสมาชิก</button>
          </div>
        </div>
      </FormContainer>
    )
  }
}


const mapStateToProps = (state: ApplicationState, props: Props) => {
  return {
   
  }
}

const withStore = connect(mapStateToProps, {
  signIn: sessionActions.signIn, 
  navigateTo: actions.navigateTo,
})

export default withStore(SignIn)
