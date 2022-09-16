import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: any = [];
  public tempProducts: any = [];
  public showSearch = false;
  public searchPattern = '';
  search: any;
  constructor(private hService: HomeService, private prodService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.hService.hideNav();
    this.prodService.getProducts().subscribe(res => {
      console.log(res);
      this.products = res;
      this.products.map((m: any) => {
        m.acc = false;
      });
      this.tempProducts = this.products;
    }, err => {
      alert('Error while fetching product list !')
    })
  }
  name = 'Angular';

  rows = [
    { id: 1, desc: "foo", showDetail: false },
    { id: 2, desc: "bar", showDetail: false },
  ];
  toggleSearchShow() {
    this.showSearch = !this.showSearch;
  }
  searchProducts() {
    this.products = this.tempProducts.filter((f: any) => {
      return (f.pname.toLowerCase()).includes((this.search.toLowerCase()));
    })
  }
  navTo(a: any, id: any) {
    if (a === 'uti') {
      this.router.navigate([`/up-tract-Info/cat/${id}`]);
    }
    if (a === 'vbri') {
      this.router.navigate([`/add-product/bidInfo/${id}`]);
    }
    if (a === 'vpd') {
      this.router.navigate([`/add-product/view/${id}`]);
    }
  }

  deleteProd(id: any) {
    if (confirm('Do you want to delete this product')) {
      this.prodService.deleteProductById(id).subscribe(res => {
        alert(res.message);
        window.location.reload();
      }, err => {
        alert(err.message)
      })
    }
  }
}
