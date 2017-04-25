import { Category } from './category'
import { Department } from './department'

interface Book {
  id: number
  title: string
  author: string
  available: boolean
  pages?: number
  category: Category
}

interface User {
  name: string
  email: string
}

interface Author extends User {
  booksPublished: number
}

interface Librarian extends User {
  department: Department
}

export { Book, Author, Librarian }