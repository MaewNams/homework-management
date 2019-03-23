// @flow
import type {ApplicationState} from '../../state/types'
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {homeworkSelectors} from '../../state/homework/selectors'
import {
  HomeworkList,
  HomeworkStatistic,
} from '../homework'
import {GroupNavbar} from '../group'

const Container = styled.div`
  padding: 1rem;
`
type Props = {
  homeworkList: ?Homework[]
}

export class Home extends PureComponent<Props> {
  render() {
    const {homeworkList} = this.props
    return (
     <Container className="container is-fluid">
      <div className="media">
        <div className="media-left">
          <GroupNavbar />
        </div>
        <div className="media-content">
          <HomeworkStatistic />
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
    homeworkList: homeworkSelectors.getHomeworkList(state)
  }
}

const withStore = connect(mapStateToProps, {

})

export default withStore(Home)
