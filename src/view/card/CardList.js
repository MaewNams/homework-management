// @flow
import type {Quote} from '../../state/book/types'

import React, { PureComponent } from 'react'

import Card from './Card'

type Props = {
  quoteList: Array<Quote>
}

export class CardList extends PureComponent<Props> {
  render() {
    const {quoteList} = this.props
    return (
     <div className="content container is-fluid">
        { quoteList && (
            quoteList.map((quote, i) => {
              return (
                <Card quote={quote} />
              )
            })
        )}
     </div>
    )
  }
}

export default CardList
