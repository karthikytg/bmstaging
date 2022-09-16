import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VarifyOtpComponent } from './varify-otp.component';
import { RouterModule, Routes } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';


const routes: Routes = [
  {
    path: '',
    component: VarifyOtpComponent
  }
];
@NgModule({
  declarations: [
    VarifyOtpComponent
  ],
  imports: [
    CommonModule,
    NgOtpInputModule,
    RouterModule.forChild(routes)
  ]
})
export class VarifyOtpModule { }
