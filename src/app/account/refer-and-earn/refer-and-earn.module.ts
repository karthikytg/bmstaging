import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferAndEarnComponent } from './refer-and-earn.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ReferAndEarnComponent
  }
];
@NgModule({
  declarations: [
    ReferAndEarnComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReferAndEarnModule { }
