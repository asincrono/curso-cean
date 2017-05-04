import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { CockpitComponent } from './cockpit/cockpit.component'
import { ItemElementComponent } from './item-element/item-element.component'

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ItemElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
