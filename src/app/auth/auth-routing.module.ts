import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'signup-form',
    loadChildren: () => import('./signup-form/signup-form.module').then(m => m.SignupFormModule)
  },
  {
    path: 'verify-otp/:a',
    loadChildren: () => import('./varify-otp/varify-otp.module').then(m => m.VarifyOtpModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
