import { Category } from './enum'

class Book {
  id: number
  title: string
  author: string
  category: Category
  available: boolean

  constructor (id: number, title: string, author: string, category: Category, available = false) {
    this.id = id
    this.title = title
    this.author = author
    this.category = category
    this.available = available
  }
}

function getAllBooks(): Book[] {
  return [
    new Book(1, 'Authority', 'Jeff VanderMeer', Category.SciFi, false),
    new Book(2, 'Finch', 'Jeff VanderMeer', Category.SciFi, true)
    ]
}

function getFirstAvailable (books: Book[]): Book | null {
  let book = books.find((book) => book.available)
  if (book) return book
  return null
}

function getByCategory (books: Book[], category: Category): Book[] {
  return books.filter(book => book.category === category)
}

function getById(books: Book[], id: number): Book | null {
  let book = books.find(book => book.id === id)
  if (book) return book
  return null
}

function checkoutBooks(books: Book[], client: string, ...ids: number[]): [boolean, Book[]] {
  let checkouts = []
  let book = null
  let complete = false
  ids.forEach(id => {
    book = getById(books, id)
    if (book) checkouts.push(book)
  })

  complete = ids.length === checkouts.length

  return [complete, checkouts]
}


var books: Book[] = getAllBooks()

var book: Book = getFirstAvailable(books)


console.log(book)
