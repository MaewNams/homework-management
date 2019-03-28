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
}

class GroupMemberPanel extends PureComponent<Props> {

  render() {
    const {groupWorkList, goToGroupWork} = this.props
    return (
      <nav className="panel">
        <div className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          สมาชิก
        </div>   
        <GroupContainer className="panel-block">
          member01@mail.com
        </GroupContainer>
        <GroupContainer className="panel-block">
          fakemember02@mail.com
        </GroupContainer>
  

        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            เพิ่มสมาชิกกลุ่ม
          </button>
        </div>
      </nav>
    )
  }
}

export default GroupMemberPanel