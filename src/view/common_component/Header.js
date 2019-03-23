// @flow
import React, { PureComponent } from 'react'
import styled from 'styled-components' 

const NavButton = styled.a `
  margin-right: auto;
  margin-left: unset;
`

type Props = {
  // signIn: Function,
}

export class Header extends PureComponent<Props> {
  render() {
    return (
      <nav className="navbar header" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <NavButton role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </NavButton>
          <a className="navbar-item">
            SQUARE BOX
          </a>
        </div>
    </nav>
    )
  } 
}

export default Header
