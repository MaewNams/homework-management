// @flow
import type {ApplicationState} from '../../state/types'
import type {
  Homework,
} from '../../state/homework/types'
import type {
  User
} from '../../state/session/types'
import type {
  GroupWork
} from '../../state/groupWork/types'

import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {actions} from 'redux-router5'
import styled from 'styled-components'

import {sessionActions} from '../../state/session/actions'
import {sessionSelectors} from '../../state/session/selectors'
import {groupWorkActions} from '../../state/groupWork/actions'
import {groupWorkSelectors} from '../../state/groupWork/selectors'
import {homeworkSelectors} from '../../state/homework/selectors'
import {homeworkActions} from '../../state/homework/actions'
import {
  HomeworkList,
  HomeworkStatistic,
} from '../homework'
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
  goToGroupWork: Function,
  groupWorkList: ?GroupWork[],
  homeworkList: ?Homework[],
  groupHomeworkList: ?Homework[],
  navigateTo: Function,
  signOut: Function,
  user: ?User,
}

export class Home extends PureComponent<Props> {

  handleGoToCreateHomework = (navigateTo: Function):void => {
    navigateTo('create-homework')
  }

  handleSignOut = (e:any):void => {
    e.preventDefault()
    const {signOut} = this.props
    signOut()
  }

  render() {
    const {homeworkList, groupHomeworkList, groupWorkList, navigateTo, user, 
      deleteHomework, goToGroupWork} = this.props
    let allWorks
    if (homeworkList && groupHomeworkList) {
      allWorks = homeworkList.concat(groupHomeworkList)
    }
    console.log('allWorks', allWorks)
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
          <GroupWorkPanel groupWorkList={groupWorkList} goToGroupWork={goToGroupWork} />
        </div>
        <div className="media-content">
          <HomeworkStatistic />
          <CreateButton>
            <a className="button is-primary" 
              onClick={() => this.handleGoToCreateHomework(navigateTo)}
            >
              สร้างการบ้านใหม่
            </a>
          </CreateButton>
          <div className="content">
          { allWorks && (
            <HomeworkList deleteHomework={deleteHomework} homeWorkList={allWorks} />
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
    homeworkList: homeworkSelectors.getHomeworkList(state),
    groupHomeworkList: homeworkSelectors.getGroupHomeworkList(state),
    groupWorkList: groupWorkSelectors.getGroupWorkList(state),
    user: sessionSelectors.getUser(state),
  }
}

const withStore = connect(mapStateToProps, {
  deleteHomework: homeworkActions.deleteHomework,
  goToGroupWork: groupWorkActions.goToGroupWork,
  navigateTo: actions.navigateTo,
  signOut: sessionActions.signOut,
})

export default withStore(Home)
