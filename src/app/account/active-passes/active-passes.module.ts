import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePassesComponent } from './active-passes.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ActivePassesComponent
  }
];
@NgModule({
  declarations: [
    ActivePassesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActivePassesModule { }
