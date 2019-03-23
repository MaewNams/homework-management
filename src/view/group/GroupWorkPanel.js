// @flow
import type {WorkGroup} from '../../state/homework/types'

import React, { PureComponent } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  padding-bottom: 1rem;
`
const GroupContainer = styled.a`
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: flex-start;
`
const Span = styled.span`
  padding-left: 0.5rem;
`
type Props = {
  workGroupList: ?WorkGroup[]
}

class GroupWorkPanel extends PureComponent<Props> {
  render() {
    const {workGroupList} = this.props
    return (
      <nav className="panel">
        <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fa fa-book" aria-hidden="true"></i>
          </span>
          กลุ่มงาน
        </a>
        { workGroupList && (
          workGroupList.map((group, i) => {
            return (
              <GroupContainer key={i} className="panel-block">
              {group.name}
              <Span class="tag is-danger">({group.workLeft})</Span>
            </GroupContainer>
            )
          })
        )}

        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>
    )
  }
}

export default GroupWorkPanel