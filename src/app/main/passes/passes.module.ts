import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassesComponent } from './passes.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PassesComponent
  }
]
@NgModule({
  declarations: [
    PassesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PassesModule { }
