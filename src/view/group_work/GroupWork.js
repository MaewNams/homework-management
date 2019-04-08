// @flow
import type {ApplicationState} from '../../state/types'
import type {
  Homework,
} from '../../state/homework/types'
import type {
  User
} from '../../state/session/types'
import type {
  GroupWork as GroupWorkType
} from '../../state/groupWork/types'

import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {actions} from 'redux-router5'
import styled from 'styled-components'

import {sessionActions} from '../../state/session/actions'
import {sessionSelectors} from '../../state/session/selectors'
import {groupWorkSelectors} from '../../state/groupWork/selectors'
import {homeworkSelectors} from '../../state/homework/selectors'
import {homeworkActions} from '../../state/homework/actions'
import {GroupHomeworkList} from './GroupHomeworkList'
import {GroupMemberPanel} from '../common_component'

const Container = styled.div`
  padding: 1rem;
`
const CreateButton = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  flex-direction: row-reverse;
`
const SignOutButton = styled.a`
  margin-bottom: 2.5rem;
`
const UserInfo = styled.h5`
  text-align: center;
`

type Props = {
  id: string,
  deleteHomework: Function,
  groupHomeworkList: ?Homework[],
  groupWork: ?GroupWorkType,
  groupWorkList: ?GroupWorkType[],
  navigateTo: Function,
  signOut: Function,
  user: ?User,
}

export class GroupWork extends PureComponent<Props> {

  handleGoToHome = ():void => {
    const {navigateTo} = this.props
    navigateTo('home')
  }

  handleGoToCreateHomework = ():void => {
    const {navigateTo, id} = this.props
    navigateTo('create-group-homework',  {
      id: id
    })
  }

  handleSignOut = (e:any):void => {
    e.preventDefault()
    const {signOut} = this.props
    signOut()
  }

  render() {
    const {groupHomeworkList, groupWork, groupWorkList, user, deleteHomework, navigateTo} = this.props
    const workLeft = groupHomeworkList ? groupHomeworkList.length : 0
    return (
      <Container className="container is-fluid">
        <div className="media">
          <div className="media-left">
            <SignOutButton onClick={this.handleGoToHome} 
              className="button is-danger is-outlined is-fullwidth"
            >
              กลับสู่หน้าหลัก
            </SignOutButton>
          { groupWork && (
              <GroupMemberPanel 
                groupWorkList={groupWorkList} 
                members={groupWork.members} 
                goToGroupWork={{}} 
                navigateTo={navigateTo} 
                />
          )}
          </div>
          <div className="media-content">
          <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">จำนวนสมาชิก</p>
                  <p className="title">1</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">กลุ่ม</p>
                  <p className="title">โครงงานคอมพิวเตอร์</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">งานค้าง</p>
                  <p className="title">{workLeft}</p>
                </div>
              </div>
            </nav>
            <CreateButton>
              <a className="button is-primary" 
                onClick={this.handleGoToCreateHomework}
              >
                สร้างงานใหม่
              </a>
            </CreateButton>
            <div className="content">
            { groupHomeworkList && (
              <GroupHomeworkList deleteHomework={deleteHomework} homeWorkList={groupHomeworkList} />
            )}
            </div>
          </div>
        </div>
      </Container>
    )
  }
}


const mapStateToProps = (state: ApplicationState, props: Props) => {
  return {
    groupHomeworkList: groupWorkSelectors.getGroupHomeworkList(state),
    groupWork: groupWorkSelectors.getGroupWork(state),
    groupWorkList: groupWorkSelectors.getGroupWorkList(state),
    user: sessionSelectors.getUser(state),
  }
}

const withStore = connect(mapStateToProps, {
  navigateTo: actions.navigateTo,
  signOut: sessionActions.signOut,
  deleteHomework: homeworkActions.deleteHomework
})

export default withStore(GroupWork)
