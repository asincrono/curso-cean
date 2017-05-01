import { Component } from '@angular/core';
import { Recipe } from "app/shared/models";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipe: Recipe

  constructor() { }

}
