import { Component, OnInit } from '@angular/core'

import { Recipe } from '../../models'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = []

  constructor() { }

  ngOnInit() {
    this.recipes.push(new Recipe('A test', 'Loads of things to do', 'https://cdn.pixabay.com/photo/2016/02/02/15/33/dishes-1175493_960_720.jpg'))
    this.recipes.push(new Recipe('Another test', 'Many loads of things to do', 'https://cdn.pixabay.com/photo/2016/02/02/15/33/dishes-1175493_960_720.jpg'))
  }

}
