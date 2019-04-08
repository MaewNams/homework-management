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
  members: string[],
  goToGroupWork: Function,
}

class GroupMemberPanel extends PureComponent<Props> {

  render() {
    const {groupWorkList, members, goToGroupWork} = this.props
    return (
      <nav className="panel">
        <div className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          สมาชิก
        </div>   
        {
          members.map((member, i) => {
            return (
              <GroupContainer key={i} className="panel-block">
                {members}
              </GroupContainer>
            )
          })
        }
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