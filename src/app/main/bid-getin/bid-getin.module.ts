import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidGetinComponent } from './bid-getin.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: BidGetinComponent
  }
];
@NgModule({
  declarations: [
    BidGetinComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BidGetinModule { }
