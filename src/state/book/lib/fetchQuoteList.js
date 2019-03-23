// @flow
import type {
  Book,
  Character,
  Quote,
  Writer
} from '../state/book/types'

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
const character2: Character = {
  name: 'Red queen',
  surname: '',
  nickName: 'The queen of heart',
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
const quote2: Quote = {
  book: book,
  character: character2,
  sentence: 'All the lies are gone',
  description: 'Finally the red queen was free from her unguilty crime',
  page: 104
}


//Now we mock data ; - ;
export const fetchQuoteList = (): Array<Quote> => {
  const quoteList = [quote, quote2]
  return quoteList
}