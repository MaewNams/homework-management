// @flow
import type {ApplicationState} from '../../state/types'
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

import {homeworkSelectors} from '../../state/homework/selectors'
import {HomeworkList} from '../homework'

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
          <nav className="panel">
            <a className="panel-block is-active">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              bulma
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              marksheet
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              minireset.css
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              jgthms.github.io
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fas fa-code-branch" aria-hidden="true"></i>
              </span>
              daniellowtw/infboard
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fas fa-code-branch" aria-hidden="true"></i>
              </span>
              mojs
            </a>
            <label className="panel-block">
              <input type="checkbox" />
              remember me
            </label>
            <div className="panel-block">
              <button className="button is-link is-outlined is-fullwidth">
                reset all filters
              </button>
            </div>
          </nav>
        </div>
        <div className="media-content">
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
