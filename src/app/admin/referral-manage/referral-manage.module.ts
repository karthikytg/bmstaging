import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferralManageComponent } from './referral-manage.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const route: Routes = [
  {
    path: '',
    component: ReferralManageComponent
  }
]
@NgModule({
  declarations: [
    ReferralManageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ]
})
export class ReferralManageModule { }
