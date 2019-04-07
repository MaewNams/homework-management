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
  groupWorkList: ?GroupWork[],
  goToGroupWork: Function,
  navigateTo: Function,
}

class GroupWorkPanel extends PureComponent<Props> {

  handleGoToCreateGroup = (navigateTo: Function):void => {
    navigateTo('create-group')
  }

  render() {
    const {groupWorkList, goToGroupWork, navigateTo} = this.props
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
              <GroupContainer key={i} className="panel-block" onClick={() => goToGroupWork(group.id)}>
              {group.name}
              <Span className="tag is-danger">({group.groupHomeworks.length})</Span>
            </GroupContainer>
            )
          })
        )}

        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth"
            onClick={() => this.handleGoToCreateGroup(navigateTo)}
          >
            สร้างกลุ่มงาน
          </button>
        </div>
      </nav>
    )
  }
}

export default GroupWorkPanel