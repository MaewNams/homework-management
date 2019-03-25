// @flow
import type {ApplicationState} from '../../state/types'

import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {actions} from 'redux-router5'
import styled from 'styled-components' 

const NavButton = styled.a `
  margin-right: auto;
  margin-left: unset;
`

type Props = {
  // signIn: Function,
  navigateTo: Function,
}

export class Header extends PureComponent<Props> {
  render() {
    const {navigateTo} = this.props
    return (
      <nav className="navbar header" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <NavButton role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </NavButton>
          <a onClick={() => navigateTo('home')} className="navbar-item">
            SQUARE BOX
          </a>
        </div>
    </nav>
    )
  } 
}

const mapStateToProps = (state: ApplicationState, props: Props) => {
  return {

  }
}

const withStore = connect(mapStateToProps, {
  navigateTo: actions.navigateTo
})

export default withStore(Header)
