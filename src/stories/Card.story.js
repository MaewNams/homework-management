
import React from 'react'
import {storiesOf} from '@storybook/react'

import Card from '../view/card/Card'
import type { 
  Book,
  Writer,
  Quote,
  Character
 } from '../state/book/types'

storiesOf('Card', module)
  .add('initial', ()=> {
    const writer: Writer = {
      name: 'Lalin',
      pic: ''
    }
    const character: Character = {
      name: 'Alice',
      surname: 'White',
      nickName: 'The madness',
      pic: ''
    }
    const book: Book = {
      name: 'Alice who kill the red queen',
      writer: writer,
      character: [],
      pic: ''
    }
    const quote: Quote = {
      book: book,
      character: character,
      sentence: 'What your is mine, what mine is my own',
      description: 'Alice said this quote when she meet the hero who try to convince her to stop the war. Alice rejected, she declare her reson to continue the war which is the quote',
      page: 73
    }
    return ( <Card quote={quote} /> )
   })
