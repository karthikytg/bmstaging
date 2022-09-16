import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidplaceComponent } from './bidplace.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: BidplaceComponent
  }
];
@NgModule({
  declarations: [
    BidplaceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BidplaceModule { }
