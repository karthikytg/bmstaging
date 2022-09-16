import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  dailyProduct: Product | undefined;
  products: Product[];
  imageBaseUrl: string = 'http://localhost:3001/';

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      if (products === null || products === undefined)
        return;
      let date = new Date();
      this.products = products.filter(product =>
        new Date(product.bidStartDate).toDateString() != date.toDateString()
      );
      this.dailyProduct = products.find(product =>
        new Date(product.bidStartDate).toDateString() == date.toDateString()
      );
    })
  }

}
