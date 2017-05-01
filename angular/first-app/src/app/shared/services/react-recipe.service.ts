import { Injectable } from '@angular/core'
import { Recipe } from 'app/shared'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { Http } from '@angular/http'

@Injectable()
export class ReactRecipeService {
  recipesChanged = new Subject<Array<Recipe>>()
  private recipes: Array<Recipe>

  constructor() {
    this.recipes = [new Recipe('Hey', [], [])]
  }

  getRecipesAsync (): Observable<Array<Recipe>> {
    return new Observable(observer => {
      observer.next(this.recipes)
    })
  }

  addRecipe (recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }
}
