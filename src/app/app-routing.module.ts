import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'pets', loadChildren: () => import('./modules/pets/pets.module').then(m => m.PetsModule)
  },
  {
    path: 'newpet', loadChildren: () => import('./modules/newpet/newpet.module').then(m => m.NewpetModule)
  },
  {
    path: '**', component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
