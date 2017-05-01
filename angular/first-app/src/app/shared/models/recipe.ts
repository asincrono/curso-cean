export class Recipe {
  name: string
  ingredients: string[]
  steps: string[]

  constructor (name: string, ingredients: string[], steps: string[]) {
    this.name = name
    this.ingredients = ingredients
    this.steps = steps
  }
}
