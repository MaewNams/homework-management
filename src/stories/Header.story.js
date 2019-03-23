import React from 'react'
import {storiesOf} from '@storybook/react'

import Header from '../view/header/Header'
import type { 
  Book,
  Writer,
  Quote,
  Character
 } from '../state/book/types'

storiesOf('Header', module)
  .add('initial', ()=> {

    return ( <Header /> )
   })
