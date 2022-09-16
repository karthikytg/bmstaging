import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';
import { ReferralsService } from 'src/app/_services/referrals.service';

@Component({
  selector: 'app-referrals-list',
  templateUrl: './referrals-list.component.html',
  styleUrls: ['./referrals-list.component.scss']
})
export class ReferralsListComponent implements OnInit {

  public products: any = [];
  public tempProducts: any = [];
  public showSearch = false;
  public searchPattern = '';
  search: any;
  constructor(private hService: HomeService, private refSer: ReferralsService, private router: Router) { }

  ngOnInit(): void {
    this.hService.hideNav();
    this.refSer.getReferrals().subscribe(res => {
      this.products = res.rows;
      this.products.map((m: any) => {
        m.acc = false;
      });
      this.tempProducts = this.products;
    }, err => {
      alert(err.message);
    })
  }
  name = 'Angular';

  rows = [
    {id: 1, desc: "foo", showDetail: false},
    {id: 2, desc: "bar", showDetail: false},
  ];
  navTo(a: any, id: any) {
    if (a === 'add') {
      this.router.navigate(['/ref-ad-manage/add/+']);       
    } else {
      this.router.navigate(['/ref-ad-manage/view/'+id]);       
    }
    
  }
  toggleSearchShow() {
    this.showSearch = !this.showSearch;
  }
  searchProducts() {
    this.products = this.tempProducts.filter((f: any) => {
      if (f.campaignName) {
        return (f.campaignName.toLowerCase()).includes((this.search.toLowerCase()));
      } else {
        return false;
      }
      
    })
  }
  deleteRef(id: any) {
    if (confirm('Would you like to delete this campaign ?')) {
      this.refSer.deleteReferralsById(id).subscribe(res => {
        alert(res.message);
        this,this.ngOnInit()
      }, err => {
        alert(err.message);
      });
    }
  }
  deactiveRef(id: any, status: any) {
    if (confirm('Would you like to '+ status +' this campaign ?')) {
      const data = {
        id,
        status
      }
      this.refSer.deactiveRefer(data).subscribe(res => {
        alert(res.message);
        this.ngOnInit()
      }, err => {
        alert(err.message)
      }); 
    }
  }
}
