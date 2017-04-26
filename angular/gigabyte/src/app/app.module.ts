import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdToolbarModule } from '@angular/material';
import { MdMenuModule } from '@angular/material'

// Local components
import { NavbarComponent } from './navbar/navbar.component'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing'
import { HomeComponent } from './home/home.component'



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Material components
    MdMenuModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
