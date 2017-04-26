import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MdCardModule } from '@angular/material'
import { MdInputModule } from '@angular/material'

import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, MdCardModule, SignupComponent]
})
export class AdminModule { }
