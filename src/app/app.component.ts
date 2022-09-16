import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HomeService } from './_services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public navShow = true;

  public constructor(
    private hService: HomeService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.hService.getNavShowListener().subscribe(res => {
      this.navShow = res;
      this.cdr.detectChanges();
    });
  }
}
