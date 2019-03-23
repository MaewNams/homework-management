// @flow
import type {ApplicationState} from '../../state/types'
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

import {homeworkSelectors} from '../../state/homework/selectors'
import {HomeworkList} from '../homework'

type Props = {
  homeworkList: ?Homework[]
}

export class Home extends PureComponent<Props> {
  render() {
    const {homeworkList} = this.props
    return (
     <div className="container is-fluid">
       { homeworkList && (
         <HomeworkList homeWorkList={homeworkList} />
       )}
     </div>
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
