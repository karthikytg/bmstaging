import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {MatSelectModule} from '@angular/material/select';

// import {MatOptionModule} from '@angular/material/select/';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
