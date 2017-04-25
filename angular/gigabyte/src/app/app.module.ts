import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './start/app.component';
import { HomeComponent } from './home/home.component'
import { NavbarComponent } from './shared/navbar.component'

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
