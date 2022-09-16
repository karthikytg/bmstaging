import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumProductComponent } from './premium-product.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PremiumProductComponent
  }
];
@NgModule({
  declarations: [
    PremiumProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PremiumProductModule { }
