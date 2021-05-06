import { NgModule}from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingPage } from './landin.page/Landing.page'




const routes : Routes = [
  {
    path :'',
    pathMatch:'full',
    redirectTo : '/landing'

  }
  ,
 {
 path: 'landing',
 component: LandingPage
}
]
@NgModule({
  imports :[RouterModule.forRoot(routes) ],
  exports :[RouterModule]

})
export class AppRoutnigMudule{

}
