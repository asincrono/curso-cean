import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { MdToolbarModule, MdButtonModule} from '@angular/material'

import { AppComponent } from './app.component'
import { HomeComponent } from 'app/home/home.component'
import { AuthModule } from './auth/auth.module'
import { AppRoutingModule } from './app-routing.module'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { ListRecipesComponent } from './list-recipes/list-recipes.component'
import { RecipeComponent } from './recipe/recipe.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ListRecipesComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdToolbarModule,
    MdButtonModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
