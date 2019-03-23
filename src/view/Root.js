import type {ApplicationState} from '../state/types'
import type {Route} from '../router/types'

import * as React from 'react'
import {connect} from 'react-redux'
import {RouteNode} from 'react-router5'
import {startsWithSegment} from 'router5-helpers'
import {Header} from './header'
import {Home} from './home'



type Props = {
  isSessionReady: boolean,
}

export class Root extends React.Component<Props> {
  renderChild(route: Route): React.Node {
    const test: Function = startsWithSegment(route.name)
    if (test('home')) {
      return <Home />
    } else {
      return null
    }
  }

  render() {
    const {isSessionReady} = this.props

    if (true) {
      return [
        <Header key="header" />,
        <RouteNode nodeName=""
          key="content"
        >
          {({route}) => this.renderChild(route)}
        </RouteNode>,
      ]
    } else {
      // TODO: display loading
      return null
    }
  }
}

function mapStateToProps(state: ApplicationState): any {
  return {
  //  isSessionReady: sessionSelectors.isReady(state),
  }
}

export default connect(
  mapStateToProps
)(Root)
