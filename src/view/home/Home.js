// @flow
import type {ApplicationState} from '../../state/types'
import type {
  Book,
  Character,
  Writer,
  Quote
} from '../../state/book/types'

import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

import {bookSelectors} from '../../state/book/selectors'
import {CardList} from '../card'

type Props = {
  quoteList: Array<Quote>
}

export class Home extends PureComponent<Props> {
  render() {
    const {quoteList} = this.props
    return (
     <div className="content">
       { quoteList && (
         <CardList quoteList={quoteList} />
       )}
     </div>
    )
  }
}


const mapStateToProps = (state: ApplicationState, props: Props) => {
  return {
    quoteList: bookSelectors.getQuoteList(state)
  }
}

const withStore = connect(mapStateToProps, {

})

export default withStore(Home)
