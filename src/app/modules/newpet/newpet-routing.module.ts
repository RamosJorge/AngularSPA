import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpetComponent } from './newpet.component';

const routes: Routes = [{ path: '', component: NewpetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewpetRoutingModule { }
