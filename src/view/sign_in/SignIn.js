// @flow
import type {ApplicationState} from '../../state/types'

import React, {Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

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
    const {signIn} = this.props
    const values = this.state
    return (
      <FormContainer>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" 
            name="password" placeholder="Text input" 
            value={values.password} 
            onChange= {this.handleChange}
          />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">สมัครสมาชิก</button>
          </div>
          <div className="control">
            <button className="button is-text">ยกเลิก</button>
          </div> 
        </div>
      </FormContainer>
    )
  }
}


const mapStateToProps = (state: ApplicationState, props: Props) => {
  return {
    signIn: sessionActions.signIn, 
  }
}

const withStore = connect(mapStateToProps, {

})

export default withStore(SignIn)
