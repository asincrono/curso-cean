export class Recipe {
  name: string
  description: string
  imageURL: string

  constructor (name: string, description: string, imageURL: string) {
    this.name = name
    this.description = description
    this.imageURL = imageURL
  }
}
