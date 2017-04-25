import { Librarian } from './interfaces'
import { Department } from './Department'

class UniversityLibrarian implements Librarian {
  department: Department;
  name: string;
  email: string;
}

export { UniversityLibrarian }