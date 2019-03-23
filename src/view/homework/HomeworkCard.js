// @flow
import type {Homework} from '../../state/homework/types'

import React, { PureComponent } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  padding-bottom: 1rem;
`

type Props = {
  homework: Homework
}

class HomeworkCard extends PureComponent<Props> {
  render() {
    const {homework} = this.props
    return (
      <CardContainer>
        <div className="card">
          <header class="card-header">
            <p class="card-header-title">
              {homework.subject}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div className="card-content">
            <div className="content">
              {homework.detail}
              <br />
              <time datetime="2016-1-1">{homework.date}</time>
            </div>
          </div>
        </div>
      </CardContainer>
    )
  }
}

export default HomeworkCard