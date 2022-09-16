import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralsListComponent } from './referrals-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const route: Routes = [
  {
    path: '',
    component: ReferralsListComponent
  }
]
@NgModule({
  declarations: [
    ReferralsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route)
  ]
})
export class ReferralsListModule { }
