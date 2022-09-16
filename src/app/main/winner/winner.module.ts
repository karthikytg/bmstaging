import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnerComponent } from './winner.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: WinnerComponent
  }
]
@NgModule({
  declarations: [
    WinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WinnerModule { }
