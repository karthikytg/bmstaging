import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadImage'
})
export class LoadImagePipe implements PipeTransform {

  imageLoaderBaseUrl: string = 'http://localhost:3001';

  constructor(
    private httpClient: HttpClient
  ) { }

  transform(imagePath: string): any {
    return this.httpClient.get(
      `${this.imageLoaderBaseUrl}/${imagePath}`,
      { responseType: 'blob' }
    );
  }
}
