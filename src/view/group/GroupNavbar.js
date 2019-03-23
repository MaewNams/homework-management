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
}

class GroupNavbar extends PureComponent<Props> {
  render() {
    const {} = this.props
    return (
      <nav className="panel">
        <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          marksheet
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          minireset.css
        </a>
        <label className="panel-block">
          <input type="checkbox" />
          remember me
        </label>
        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>
    )
  }
}

export default GroupNavbar