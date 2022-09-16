import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LoadImagePipe } from "./pipes/load-image.pipe";

@NgModule({
  declarations: [
    LoadImagePipe
  ],
  imports: [
    HttpClientModule,
  ],
  exports: [
    LoadImagePipe
  ]
})
export class CoreModule { }