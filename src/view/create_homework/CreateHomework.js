// @flow
import type {Homework} from '../../state/homework/types'

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
 
}

class CreateHomework extends PureComponent<Props> {
  render() {
    const {} = this.props
    return (
      <CardContainer>

      </CardContainer>
    )
  }
}

export default CreateHomework