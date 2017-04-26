import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

// Local imports
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './admin/login/login.component'
import { SignupComponent } from './admin/signup/signup.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignupComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
