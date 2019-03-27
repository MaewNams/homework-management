// @flow
import type {ApplicationState} from '../../state/types'

import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {actions} from 'redux-router5'
import styled from 'styled-components' 

const Container = styled.div `
  padding: 1rem;
`

type Props = {
  navigateTo: Function,
}

export class Header extends PureComponent<Props> {
  render() {
    const {navigateTo} = this.props
    return (
      <Container className="container is-fluid">
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-start">
              <a onClick={() => navigateTo('home')} className="navbar-item">
                <span class="icon">
                  <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                </span>
                <span>
                  SQUARE BOX
                </span>
              </a>
            </div>
        </nav>
      </Container>
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
