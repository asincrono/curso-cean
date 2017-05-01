import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { ShoppingListComponent } from './shopping-list/components/shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shopping-list/components/shopping-edit/shopping-edit.component'
import { IngredientComponent } from './shopping-list/components/ingredient/ingredient.component'
import { RecipeListComponent } from './recipe-book/components/recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './recipe-book/components/recipe-detail/recipe-detail.component'
import { RecipeBookComponent } from './recipe-book/components/recipe-book/recipe-book.component'
import { RecipeItemComponent } from './recipe-book/components/recipe-item/recipe-item.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    IngredientComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    RecipeItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
