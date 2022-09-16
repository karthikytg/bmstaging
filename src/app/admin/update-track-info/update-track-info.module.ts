import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTrackInfoComponent } from './update-track-info.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: UpdateTrackInfoComponent
  }
]
@NgModule({
  declarations: [
    UpdateTrackInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    RouterModule.forChild(routes)
  ]
})
export class UpdateTrackInfoModule { }
