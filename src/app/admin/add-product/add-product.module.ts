import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


const routes: Routes = [
  {
    path: '',
    component: AddProductComponent
  }
]
@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy},
  ],
})
export class AddProductModule { }
