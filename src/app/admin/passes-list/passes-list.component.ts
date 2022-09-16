import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pass, PassType } from 'src/app/core/models/pass';
import { HomeService } from 'src/app/_services/home.service';
import { PassesService } from 'src/app/_services/passes.service';

@Component({
  selector: 'app-passes-list',
  templateUrl: './passes-list.component.html',
  styleUrls: ['./passes-list.component.scss']
})
export class PassesListComponent implements OnInit {
  PassType = PassType;

  passes: Pass[] = [];
  tempProducts: any = [];
  showSearch = false;
  expandedOptionsIndex: number = -1;
  searchPattern = '';
  search: any;
  constructor(private homeService: HomeService,
    private passesService: PassesService,
    private router: Router) { }

  ngOnInit(): void {
    this.homeService.hideNav();
    // this.products = [];
    this.passesService.getPasses().subscribe(res => {
      console.log('>> ', res);
      this.passes = res;
      this.tempProducts = this.passes;
    }, err => {
      alert('Error while fetching passes list !')
    })
  }
  navTo(a: any, id: any) {
    if (a === 'vpd') {
      this.router.navigate(['/passes-manage/view/' + id]);
    }
    if (a !== 'vpd') {
      this.router.navigate(['/passes-manage/' + a + '/' + id]);
    }
  }
  toggleSearchShow() {
    this.showSearch = !this.showSearch;
  }
  searchProducts() {
    this.passes = this.tempProducts.filter((f: any) => {
      if (f.pname) {
        return (f.pname.toLowerCase()).includes((this.search.toLowerCase()));
      } else {
        return false;
      }

    })
  }
  deletePassById(id: any) {
    if (confirm('Would you like to delete this pass')) {
      this.passesService.deletePassById(id).subscribe(res => {
        alert(res.message);
        window.location.reload();
      }, err => {
        alert('Error while delete passe !')
      });
    }
  }

  activateOrDeactivate(id: any, status: any) {
    if (confirm('Would you like to ' + status + ' this pass')) {
      const data = {
        id,
        status
      }
      this.passesService.aodPass(data).subscribe(res => {
        alert(res.message);
        window.location.reload();
      }, err => {
        alert('Error while ' + status + ' passe !')
      });
    }
  }
}
