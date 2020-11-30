import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewpetRoutingModule } from './newpet-routing.module';
import { NewpetComponent } from './newpet.component';


@NgModule({
  declarations: [NewpetComponent],
  imports: [
    CommonModule,
    NewpetRoutingModule
  ]
})
export class NewpetModule { }
