import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/_services/home.service';

@Component({
  selector: 'app-active-passes',
  templateUrl: './active-passes.component.html',
  styleUrls: ['./active-passes.component.scss']
})
export class ActivePassesComponent implements OnInit {

  constructor(private hService: HomeService) { }

  ngOnInit(): void {
    this.hService.makeYellow();
  }

}
