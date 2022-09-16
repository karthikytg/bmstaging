import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassesManageComponent } from './passes-manage.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: PassesManageComponent
  }
]
@NgModule({
  declarations: [
    PassesManageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PassesManageModule { }
