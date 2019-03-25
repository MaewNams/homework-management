// @flow
import type {ApplicationState} from '../../state/types'
import type {
  Homework,
  WorkGroup,
} from '../../state/homework/types'

import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {actions} from 'redux-router5'
import styled from 'styled-components'

import {homeworkSelectors} from '../../state/homework/selectors'
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

type Props = {
  homeworkList: ?Homework[],
  workGroupList: ?WorkGroup[],
  navigateTo: Function,
}

export class Home extends PureComponent<Props> {

  handleGoToCreateHomework = (navigateTo: Function):void => {
    navigateTo('create-homework')
  }

  render() {
    const {homeworkList, workGroupList, navigateTo} = this.props
    return (
     <Container className="container is-fluid">
      <div className="media">
        <div className="media-left">
          <GroupWorkPanel workGroupList={workGroupList} />
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
          { homeworkList && (
            <HomeworkList homeWorkList={homeworkList} />
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
    workGroupList: homeworkSelectors.getWorkGroupList(state),
  }
}

const withStore = connect(mapStateToProps, {
  navigateTo: actions.navigateTo
})

export default withStore(Home)
