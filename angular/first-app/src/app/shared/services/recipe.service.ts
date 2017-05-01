import { Injectable } from '@angular/core'

import { Recipe } from './../models/recipe'

@Injectable()
export class RecipeService {

  constructor() { }

  getRecipes(n: number): Recipe[] {
    let recipes: Recipe[] = []

    for (let i = 0; i < n; i += 1) {
      recipes.push(new Recipe(`recipe ${i}`, [`${i}`], [`${i}`]))
    }

    return recipes
  }

}
