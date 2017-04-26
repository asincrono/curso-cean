import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

// import { MdCardModule } from '@angular/material'
// import { MdInputModule } from '@angular/material'

import { AuthRoutingModule } from './auth-routing.module'

import { SigninComponent } from './signin/signin.component'
import { SignupComponent } from './signup/signup.component'
import { AuthComponent } from './auth.component'

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent
  ]
})
export class AuthModule { }
