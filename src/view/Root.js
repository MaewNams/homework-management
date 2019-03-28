import type {ApplicationState} from '../state/types'
import type {Route} from '../router/types'

import * as React from 'react'
import {connect} from 'react-redux'
import {createRouteNodeSelector} from 'redux-router5'
import {startsWithSegment} from 'router5-helpers'
import {compose, withProps} from 'recompose'

import {CreateHomework} from './create_homework'
import {
  CreateGroupHomework,
} from './create_groupwork'
import {GroupWork} from './group_work'
import {Header} from './common_component'
import {Home} from './home'
import {SignIn} from './sign_in'
import {SignUp} from './sign_up'

type Props = {
  view: React.Node,
  route: any,
}

export class Root extends React.Component<Props> {
  render() {
    const {view, route} = this.props
    const test = startsWithSegment(route.name)
    return [
      <Header key="header" />,
      <div className="root-content" key="content" name="root">
        {view}
      </div>
    ]
  }
}

const enhance = compose(
  withProps(props => {
    if (!props.route) {
      return {view: null}
    }
    const {name} = props.route
    const test = startsWithSegment(name)
    if (test('home')) {
    return {view: <Home /> }
    } else if (test('sign-in')) {
    return {view: <SignIn />}
    } else if (test('sign-up')) {
    return {view: <SignUp />}
    } else if (test('group')) {
      const id = props.route.params.id
      return {view: <GroupWork id={id} /> }
    } else if (test('create-group-homework')) {
      const id = props.route.params.id
      return {view: <CreateGroupHomework id={id} /> }
    } else if (test('create-homework')) {
      return {view: <CreateHomework />}
    } else {
      return {view: null}
    }
  })
)

const withStore = connect(state => {
  const routeSelector = createRouteNodeSelector('')
  return {
    ...routeSelector(state)
  }
})

export default withStore(enhance(Root))