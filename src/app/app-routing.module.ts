import { NgModule}from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactCreatePage } from './contact-create/contact-create.page'
import { PokemonSelectedCompnent } from './pokemon-selected/pokemon-selected.component'
import { PokemonPage } from './pkoemons/pokemons.page'
import { ProfileComponent } from './profile/profile.component'
import { UserGuard } from './user.guard'




const routes : Routes = [
  {
    path :'',
    pathMatch:'full',
    redirectTo : 'create'

  }
  ,
 {
 path: 'create',
   component:ContactCreatePage
  },

  {
   path :'pokemon', component : PokemonPage , canActivate:[UserGuard]
  }
 ,{
  path :'selected', component : PokemonSelectedCompnent , canActivate:[UserGuard]
  }
  , {
   path :'profile', component : ProfileComponent , canActivate:[UserGuard]
 }
]
@NgModule({
  imports :[RouterModule.forRoot(routes) ],
  exports :[RouterModule]

})
export class AppRoutnigMudule{

}
