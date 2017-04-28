import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs/Subscription'

import { RecipeHttpService, Recipe } from './../shared'

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
  providers: [RecipeHttpService]
})
export class ListRecipesComponent implements OnInit, OnDestroy {
  recipes: Recipe[]
  subscription: Subscription

  constructor(private recipeService: RecipeHttpService) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.getRecipes().subscribe((data: Recipe[]) => {
      this.recipes = data
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
