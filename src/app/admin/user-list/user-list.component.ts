import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { HomeService } from 'src/app/_services/home.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public products: any = [];
  public tempProducts: any = [];
  public showSearch = false;
  public searchPattern = '';
  search: any;
  constructor(private hService: HomeService, 
    private authSer: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.hService.hideNav();
    this.authSer.getUsersList().subscribe(res => {
      console.log(res.rows);
      this.products = res.rows;
      this.products.map((m: any) => {
        m.acc = false;
        m.bp = 0;
        m.bw = 0;
        m.ref = 0;
        m.ap = 'No'
      });
      this.tempProducts = this.products;
    }, err => {
      console.log(err.message)
    })
  }
  toggleSearchShow() {
    this.showSearch = !this.showSearch;
  }
  searchProducts() {
    this.products = this.tempProducts.filter((f: any) => {
      if (f.fname) {
        return (f.fname.toLowerCase()).includes((this.search.toLowerCase()));
      } else {
        return false;
      }
      
    })
  }
  deleteUser(id: any) {
    if (confirm('Would you like to delete this user ?')) {
      this.authSer.deleteUserById(id).subscribe(res => {
        alert(res.message);
        this,this.ngOnInit()
      }, err => {
        alert(err.message);
      });
    }
  }
  blockOrUnblockUser(id: any, status: any) {
    const lab = status === 0 ? 'Block' : 'Unblock'
    if (confirm('Would you like to '+ lab +' this user ?')) {
      const data = {
        id,
        status
      }
      this.authSer.blockOrUnblockUser(data).subscribe(res => {
        alert(res.message);
        this.ngOnInit()
      }, err => {
        alert(err.message)
      }); 
    }
  }
  navTo(a: any, id: any) {
    if (a === 'vud') {
      this.router.navigate(['/user-info/'+ id]); 
    }
  }
}
