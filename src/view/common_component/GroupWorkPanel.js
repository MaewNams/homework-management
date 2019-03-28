// @flow
import type {GroupWork} from '../../state/groupWork/types'

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
  groupWorkList: ?GroupWork[]
}

class GroupWorkPanel extends PureComponent<Props> {
  render() {
    const {groupWorkList} = this.props
    return (
      <nav className="panel">
        <div className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-book" aria-hidden="true"></i>
          </span>
          กลุ่มงาน
        </div>
        { groupWorkList && (
          groupWorkList.map((group, i) => {
            return (
              <GroupContainer key={i} className="panel-block">
              {group.name}
              <Span className="tag is-danger">({group.groupHomeworks.length})</Span>
            </GroupContainer>
            )
          })
        )}

        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            สร้างกลุ่มงาน
          </button>
        </div>
      </nav>
    )
  }
}

export default GroupWorkPanel