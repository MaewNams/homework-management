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
import {GroupWorkPanel} from '../common_component'

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
  deleteHomework: Function,
  groupHomeworkList: ?Homework[],
  groupWorkList: ?GroupWorkType[],
  navigateTo: Function,
  signOut: Function,
  user: ?User,
}

export class GroupWork extends PureComponent<Props> {

  handleGoToCreateHomework = (navigateTo: Function):void => {
    navigateTo('create-homework')
  }

  handleSignOut = (e:any):void => {
    e.preventDefault()
    const {signOut} = this.props
    signOut()
  }

  render() {
    const {groupHomeworkList, groupWorkList, navigateTo, user, deleteHomework} = this.props
    return (
      <Container className="container is-fluid">
        <div className="media">
          <div className="media-left">
            {user && (
              <UserInfo className="subtitle is-5">
                <i className="fa fa-user"></i> {user.email}
              </UserInfo>
            )}
            <SignOutButton onClick={this.handleSignOut} className="button is-danger is-outlined is-fullwidth">
              ออกจากระบบ
            </SignOutButton>
            <GroupWorkPanel groupWorkList={groupWorkList} />
          </div>
          <div className="media-content">
            <CreateButton>
              <a className="button is-primary" 
                onClick={() => this.handleGoToCreateHomework(navigateTo)}
              >
                สร้างการบ้านใหม่
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
    groupHomeworkList: homeworkSelectors.getHomeworkList(state),
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
