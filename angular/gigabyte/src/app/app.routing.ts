import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

// Local imports
import { HomeComponent } from './home/home.component'

@NgModule({
  imports: [ RouterModule.forRoot([
    {
      path: '',
      component: HomeComponent
    }
  ]) ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}