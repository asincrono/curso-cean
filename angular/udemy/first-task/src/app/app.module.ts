import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { WarningAlertComponent } from './warning-alert/warning-alert.component'
import { SuccessAlertComponent } from './success-alert/success-alert.component'
import { AlertsComponent } from './alerts/alerts.component'
import { NavbarComponent } from './navbar/navbar.component';
import { AlertComponent } from './alert/alert.component'

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    NavbarComponent,
    AlertComponent
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
