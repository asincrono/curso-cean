import { Component, OnInit } from '@angular/core'
import { Ingredient } from 'app/shared/models/ingredient'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Array<Ingredient> = [
    new Ingredient('Paprika', 100),
    new Ingredient('Apples', 5)
  ]

  constructor() { }

  ngOnInit() {
  }

}
