// @flow

export type Url = string

export type Character = {
  name: string,
  surname: string,
  nickName: string,
  pic: Url,
}

export type Writer = {
  name: string,
  pic: Url
}

export type Book = {
  name: string,
  writer: Writer,
  character: Array<Character>,
  pic: Url,
}

export type Quote = {
  book: Book,
  character: Character,
  sentence: string,
  description: string,
  page: number,
}



export type BookState = {
  quoteList: Array<Quote>
}
