import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassesListComponent } from './passes-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: PassesListComponent
  }
]
@NgModule({
  declarations: [
    PassesListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PassesListModule { }
