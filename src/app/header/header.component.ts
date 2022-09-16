import { Component, OnInit } from '@angular/core';
import { HomeService } from '../_services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public bg = false;
  
  constructor(private hService: HomeService) { }

  ngOnInit(): void {
    this.hService.getAuthStatusListener().subscribe(res => {
      this.bg = res
    });
    
  }

}
