// @flow
import type {WorkGroup} from '../../state/homework/types'

import React, { PureComponent } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  padding-bottom: 1rem;
`
const BottomMenu = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 1rem;
  justify-content: center;
  padding-bottom: 1rem;
`
type Props = {
  workGroupList: ?WorkGroup[]
}

class GroupWorkPanel extends PureComponent<Props> {
  render() {
    const {workGroupList} = this.props
    return (
      <nav className="panel">
        <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </a>
        { workGroupList && (
          workGroupList.map((group, i) => {
            return (
              <a key={i} className="panel-block">
                <span className="panel-icon">
                  <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                {group.name}: ({group.workLeft})
            </a>
            )
          })
        )}

        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>
    )
  }
}

export default GroupWorkPanel